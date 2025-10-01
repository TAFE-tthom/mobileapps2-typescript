

export type PriorityQueueComparator<T> = (a: T, b: T) => number;


export class PriorityQueue<T> {

  comparator: PriorityQueueComparator<T>;

  constructor(cmpfn: PriorityQueueComparator<T>) {

  }

  dequeueMin(): T | null {

    return null;
  }

  peek(): T | null {

    return null;    
  }

  enqueue(item: T) {

  }

}
