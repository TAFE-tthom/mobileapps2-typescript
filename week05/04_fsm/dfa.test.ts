import {expect, test} from '@jest/globals';

import { DFAState, State, AcceptState, DFA } from './dfa';

type TransitionEncoding = [number, string, number];

function associateStates(states: Array<DFAState>,
  transitions: Array<TransitionEncoding>) {

  for(const t of transitions) {
    const [a, s, b] = t;
    const aState = states[a];
    const bState = states[b];
    const symbol = s;
    aState.setTransition(symbol, bState);
  }
  
}

function evaltest(states: Array<DFAState>, input: Array<string>, expected: boolean) {
  const dfa = makeDFA(states);
  const res = dfa.evaluate(input);
  expect(res).toBe(expected);    
}

function makeStates(states: Array<[string, boolean]>): Array<DFAState> {
  const l = [];
  for(const st of states) {
    const [s, a] = st;
    if(a) {
      l.push(new AcceptState(s));
    }else {
      l.push(new State(s));
    }
  }
  return l;
}

function makeDFA(states: Array<State>): DFA {
  return new DFA(states[0]);
}

test('fsm test, 1', function() {
  const states: Array<[string, boolean]> = [
    ['A', false],
    ['B', false],
    ['C', true],
  ];

  const transitions: Array<[number, string, number]> = [
    // for A
    [0, 'a', 0],
    [0, 'b', 1],
    [0, 'c', 2],

    // for B
    [1, 'a', 0],
    [1, 'b', 0],
    [1, 'c', 2],

    // for C
    [2, 'a', 2],
    [2, 'b', 2],
    [2, 'c', 2],
  ];

  const inputs: Array<[Array<string>, boolean]> = [
    [['c'], true],
    [['b', 'c'], true],
    [['a', 'a', 'a', 'b', 'b', 'c'], true],
    [['a', 'a', 'a', 'b', 'b', 'a', 'c'], true],
    [['a', 'a'], false],
    [['b', 'b'], false],
  ];


  const implstates = makeStates(states);
  associateStates(implstates, transitions);

  for(const inp of inputs) {
    const [inpset, exp] = inp;
    evaltest(implstates, inpset, exp);
  }  
  
});


test('fsm test, 2', function() {
  const states: Array<[string, boolean]> = [
    ['A', false],
    ['B', false],
    ['C', false],
    ['D', true],
  ];

  const transitions: Array<[number, string, number]> = [
    // for A
    [0, 'a', 0],
    [0, 'b', 1],
    [0, 'c', 2],
    [0, 'd', 2],

    // for B
    [1, 'a', 1],
    [1, 'b', 0],
    [1, 'c', 2],
    [1, 'd', 1],

    // for C
    [2, 'a', 2],
    [2, 'b', 2],
    [2, 'c', 2],
    [2, 'd', 3],
  ];

  const inputs: Array<[Array<string>, boolean]> = [
    [['c'], false],
    [['b', 'c'], false],
    [['a', 'a', 'a', 'b', 'b', 'c'], false],
    [['a', 'a', 'a', 'b', 'b', 'a', 'c'], false],
    [['a', 'a'], false],
    [['b', 'b'], false],
    [['b', 'c', 'd'], true],
  ];


  const implstates = makeStates(states);
  associateStates(implstates, transitions);

  for(const inp of inputs) {
    const [inpset, exp] = inp;
    evaltest(implstates, inpset, exp);
  }  
  
});
