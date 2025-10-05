

export interface LRUEntryMeta<T> {
  /*
   * Retrieves the actual data
   */
  retrieve(): T
}

export class LRUEntry<M extends LRUEntryMeta<T>, T> {

  key: number;
  meta: M | null;
  object: T | null;

  constructor(
    key: number = -1,
    meta: M | null = null,
    object: T | null = null) {

    this.key = key;
    this.meta = meta;
    this.object = object;
  }

  /**
   * Gets the key of the entry itself
   */
  getKey(): number {
    return this.key;
  }

  /**
   * Sets the key to the entry
   */
  setKey(key: number) {
    this.key = key;
  }

  /**
   * Cleans up the entry, is used to remove all used
   * information and make the spot vacant
   */
  clean() {
    this.meta = null;
    this.object = null;
  }

  /**
   * Drops the data associated
   */
  drop() {
    this.object = null;
  }

  /**
   * This is used to check if the object is free to use
   */
  isFree() {
    return this.meta === null && this.object === null;
  }

  /**
   * Has the metadata descriptor
   */
  hasDesriptor() {
    return this.meta !== null;
  }

  /**
   * Checks to see if the data has been loaded
   */
  hasData() {
    return this.meta !== null
      && this.object !== null;
  }

  /**
   * If the meta is available, then we can read and hold onto the data.
   */
  readData() {
    this.object = this.meta!.retrieve();
  }

  /**
   * Gets the data that is to be read
   */
  getData() {
    if(!this.object) {
      this.readData();
    }
    return this.object;
  }
}

/**
 * Least Recently Used Cache
 */
export class LRUCache<M extends LRUEntryMeta<T>, T> {

  // Do not remove keycounter, it is used to keep track of key entries
  keycounter: number = 0;

  constructor(active: number = 4, inactive: number = 4) {

  }

  
  /**
   * Gets the next key
   */
  #nextKey() {
    return this.keycounter++;
  }

  /**
   *
   * Tries to retrieve the object from the cache
   * If it does not exist, it returns null
   * If it does exist, it will promote it to active list
   * and make sure the data is read
   */
  use(key: number) {
    return null;
  }

  /**
   * Add a new bit of meta-data in the list
   * returns the key to be used
   */
  add(meta: M) {

    return null;
  }

  /**
   * Gets the status of an LRUEntry given the key
   */
  status(key: number): LRUEntryStatus | null {

    return null;
  }
}

export type LRUEntryStatus = {
  key: number
  meta: any
  data: any
  dataLoaded: boolean
}
