

export class ArrayPoolObject<T extends ArrayPoolObject<T>> {

  poolIdent: number;
  
  /**
   * Constructs the pool object
   */
  constructor(poolref: ArrayPool<T>) {
    this.poolIdent = poolref.getNextIdentifier();
  }


  getIdentifier() {
    return 0;
  }

  /**
   * Releases the object that is held by the
   * pool
   */
  release(): boolean {

    return false;
  }
}


/**
 * Factory interface,
 * It is reasonable that the factory is able to build object
 *   with sensible defaults
 */
export interface ArrayPoolObjectFactory<T extends ArrayPoolObject<T>> {
  /**
   * Constructor method of the objects that are tobe constructed
   */
  construct(...args: any): T;
}

/**
 * Entry within the pool itself
 * Outlines if it is occupied or not
 */
export class ArrayPoolEntry<T extends ArrayPoolObject<T>> {


  /**
   * Constructor of the entry
   */
  constructor() {}

  /**
   * Creates an empty slot in the pool itself
   */
  static Empty<T extends ArrayPoolObject<T>>() {
  }

  /**
   * Sets the contents of the ArrayPoolEntry
   *   Should not be set often explicitly
   */
  occupy(object: T) {

  }

  /**
   * Releases the object (sets the used property to false)
   */
  release() {

  }

  /**
   * Nullifies the entry
   */
  nullify() {

  }

  /**
   * Constructs object with a default constructor
   */
  claim(factory: ArrayPoolObjectFactory<T>, ...args: any): T {

    return {} as T //WARN: Not valid
  }

  /**
   * Used to check if the object
   *   is null or not
   */
  used(): boolean {

    return false;
  }
}


/**
 * An array pool is used to construct constraints on a particular
 * object and ensure reusability of memory that will be used at any given time
 *
 * Within a GarbageCollector environment, this addresses sawtoothing
 * performance issues that occur with a lack of pooling
 */
export class ArrayPool<T extends ArrayPoolObject<T>> {

  

  /**
   * Constructs the arraypool
   * uses the set size
   */
  constructor(factory: ArrayPoolObjectFactory<T>, size: number = 16) {

  }

  /**
   * Returns an object of type T
   *   Gets a claim from the pool, this will be the object
   *   itself
   */
  claim(...args: any): T | null {

    return null;
  }

  
  /**
   * Releases the claim the object has on the data.
   */
  release(ident: number): boolean {


    return true;
  }


  getFreeSlots() {
    return 0;
  }


  getUsed() {

    return 0;
  }

  getSize() {

    return 0;
  }


  getNextIdentifier() {
    return 0;
  }
}


