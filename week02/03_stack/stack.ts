
/**
 * StackNode for holding data
 */
export class StackNode<T> {
	value: T | null
	next: StackNode<T> | null

	constructor(value: T) {
		this.next = null;
		this.value = value;
	}

}


export class Stack<T> {
	
	root: StackNode<T> | null = null;

	/**
	 * Creates a linkedlist
	 * Should initialise the root node of the linked list
	 * and size
	 */
	constructor() {
		//TODO: Implement fields
		
	}

	/**
	 * Gets the root of the linkedlist, 
	 * this would be the starting
	 * node
	 * @return {QueueNode} root - 
	 * 	Root of the linkedlist
	 */
	peek(): StackNode<T> | null {
		return null;	
	}

	
	/**
	 * Appends an object to the end of the linkedlist
	 * @param {number} obj - 
	 * 	Object to be inserted into the
	 * 	linked list
	 *
	 */
	push(obj: T) {
		//TODO: Implement append logic
		if(this.root == null) {
			this.root = new StackNode<T>(obj);
		}
	}

	/**
	 * Removes an element from the queue front, returns it
	 * @return {Object} obj - 
	 * 	Object to be removed or null
	 *
	 */
	pop(): T | null {
		//TODO: Implement remove logic
		return null;
	}

	/**
	 * Size of the list, number of elements in the list
	 * @return {number} size - 
	 * 	Number of elements in the list
	 */
	size(): number {
		//TODO: Return the number of elements 
		// in the linked list
		return 0;
	}

}


