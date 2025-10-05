
import { expect, test } from 'vitest';

import { Equivalence, Hashable, HashMap } from './HashMap';

function DJBHash(obj: string) {
  
    let size = obj.length;
    let hash = 5381;

    for(let i = 0; i < size; i++) {
        hash = ((hash << 5) + hash) + (obj.charCodeAt(i) % 255);

    }

    return hash;
}

class NameKey implements Equivalence<NameKey>, Hashable {

  keyname: string

  constructor(key: string) {
    this.keyname = key;
  }

  isEqualTo(obj: NameKey): boolean {
    return this.keyname === obj.keyname;
  }

  hash() {
    return DJBHash(this.keyname);
  }
  
}

class ObjValue {

  age: number;
  name: string
  active: boolean

  constructor(name: string, age: number, active: boolean) {
    this.name = name;
    this.age = age;
    this.active = active;
  }
  
}


type TestData = {
  name: string,
  pairs: Array<[NameKey, ObjValue]>,
  opers: Array<(
    map: HashMap<NameKey, ObjValue>,
    state: Array<ObjValue | null>) => void>,
  expected: Array<ObjValue | null>
}

function MakeTest(testdata: TestData) {

  const title = `${testdata.name} - ${testdata.expected}`;
  const opers = testdata.opers;
  const pairs = testdata.pairs;
  const expected = testdata.expected;

  test(title, function() {

    const map = new HashMap<NameKey, ObjValue>();
    const state = new Array<ObjValue | null>();

    for(const pair of pairs) {
      map.insertItem(pair[0], pair[1]);
    }

    for(const op of opers) {
      op(map, state)
    }

    expect(state).toEqual(expected);
    
    
  })
}

function GetOpKey(key: string) {

  const nk = new NameKey(key);

  return function(map: HashMap<NameKey, ObjValue>,
    state: Array<ObjValue | null>) {
      state.push(map.getItem(nk));
  }  
}

MakeTest({
  name: "HashMap, 1 entry",
  pairs: [
    [new NameKey('Address'), new ObjValue('Mac St', 330, true)],
  ],
  opers: [
    GetOpKey('Address')
  ],
  expected: [
    new ObjValue('Mac St', 330, true)
  ]
})

MakeTest({
  name: "HashMap, 2 entries",
  pairs: [
    [new NameKey('Address'), new ObjValue('Mac St', 330, true)],
    [new NameKey('Street'), new ObjValue('Yellow St', 830, false)],
  ],
  opers: [
    GetOpKey('Address'),
    GetOpKey('Street')
  ],
  expected: [
    new ObjValue('Mac St', 330, true),
    new ObjValue('Yellow St', 830, false)
  ]
})

MakeTest({
  name: "HashMap, 2 entries, Missing Get",
  pairs: [
    [new NameKey('Address'), new ObjValue('Mac St', 330, true)],
    [new NameKey('Street'), new ObjValue('Yellow St', 830, false)],
  ],
  opers: [
    GetOpKey('Address'),
    GetOpKey('Street'),
    GetOpKey('Person'),
  ],
  expected: [
    new ObjValue('Mac St', 330, true),
    new ObjValue('Yellow St', 830, false),
    null
  ]
})


MakeTest({
  name: "HashMap, 5 entries",
  pairs: [
    [new NameKey('Address'), new ObjValue('Mac St', 330, true)],
    [new NameKey('Street'), new ObjValue('Yellow St', 830, false)],
    [new NameKey('Jefferson'), new ObjValue('Coded', 83011223, true)],
    [new NameKey('Poly'), new ObjValue('Upwards', 8879, true)],
    [new NameKey('Geometry'), new ObjValue('Conglomerate', 112231, false)],
  ],
  opers: [
    GetOpKey('Address'),
    GetOpKey('Street'),
    GetOpKey('Jefferson'),
    GetOpKey('Poly'),
    GetOpKey('Geometry'),
  ],
  expected: [
    new ObjValue('Mac St', 330, true),
    new ObjValue('Yellow St', 830, false),
    new ObjValue('Coded', 83011223, true),
    new ObjValue('Upwards', 8879, true),
    new ObjValue('Conglomerate', 112231, false),
  ]
})


