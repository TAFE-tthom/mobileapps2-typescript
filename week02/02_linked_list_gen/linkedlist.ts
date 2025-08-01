
export class LinkedListNode<T> {
	value: T | null
	next: LinkedListNode<T> | null

	constructor(value: T) {
		this.next = null;
		this.value = value;
	}

}


/** LinkedList class **/
export class LinkedList<T> {
	
	root: LinkedListNode<T> | null = null;

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
	 * @return {LinkedListNode} root - 
	 * 	Root of the linkedlist
	 */
	retrieveRoot(): LinkedListNode<T> | null {
		return null;	
	}

	/**
	 * Retrieves an object within the list
	 * @param {number} index - 
	 * 	Logical location of a node
	 * @return {number} obj - 
	 * 	Object found at location or null
	 */
	retrieve(index: number): T | null {
		let obj = null;
		//TODO: Implement retrieve logic

		

		return obj;
	}

	/**
	 * Appends an object to the end of the linkedlist
	 * @param {number} obj - 
	 * 	Object to be inserted into the
	 * 	linked list
	 *
	 */
	append(obj: T) {
		//TODO: Implement append logic
		if(this.root == null) {
			this.root = new LinkedListNode<T>(obj);
		}
	}

	/**
	 * Removes an element from the linkedlist, returns it
	 * @param {number} index - 
	 * 	Location of object to be removed
	 * @return {Object} obj - 
	 * 	Object to be removed or null
	 *
	 */
	remove(index: number): T | null {
		//TODO: Implement remove logic
		return null;
	}

	/**
	 * Adding a new node to the front of the linkedlist
	 * @param {number} obj - 
	 * 	Object to be added to the front
	 */
	prepend(obj: T) {
		//TODO: Implement prepend logic
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


