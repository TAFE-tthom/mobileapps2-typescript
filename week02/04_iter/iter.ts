/**
 * LinkedListIterable interfacee
 * Make sure your linkedlist implementation
 * is able to return an iterator, specifically the
 * LinkedListIterator object when called.
 */
export interface LinkedListIterable<T> {

	getIterator(): LinkedListIterable<T>;
	
}


/** LinkedList Iterator class **/
export class LinkedListIterator<T> {

	// Your linked list should implement this interface
	iterable: LinkedListIterable<T>;

	// You can add more fields, consider what you need
	// to monitor the state

	/**
	 * Creates an iterator that will be usable
	 * and keep track of the current state of the
	 * iterator.
	 */
	constructor(iterable: LinkedListIterable<T>) {
		this.iterable = iterable;
	}

	/**
	 * Should outline if the iterator has finished
	 */
	finished(): boolean {

		return true;
	}

	/**
	 * Gets the next object from the iterator
	 */
	getNext(): T | null {
		return null;
	}

}


