
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

/**
 * Stack 
 */
export class Stack<T> {
	
	root: StackNode<T> | null = null;

	/**
	 * Creates a stack
	 * Should initialise the root node of the linked list
	 * and size
	 */
	constructor() {
		//TODO: Implement fields
		
	}

	/**
	 * Gets the root of the stack, 
	 * this would be the starting node
	 * @return {StackNode} root - 
	 * 	Root of the linkedlist
	 */
	peek(): StackNode<T> | null {
		return null;	
	}

	
	/**
	 * Adds an element to the stack, replaces the top of the stack
	 * with the new one.
	 * @param {T} obj - 
	 */
	push(obj: T) {
		//TODO: Implement append logic
	}

	/**
	 * Removes the top element from stack, returns it
	 * @return {T} obj - Object to be removed or null
	 *
	 */
	pop(): T | null {
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


