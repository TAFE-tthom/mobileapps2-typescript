
/** Zipper class **/
export class Zipper {
	
	// You can specify your own fields here

	/**
	 * Constructor takes in no arguments
	 */
	constructor() {
		
	}

	/**
	 * Constructs a Zipper
	 */
	static with(iters: Array<any[]>): Zipper {
		let zipper = new Zipper();
		return zipper;
	}

	/**
	 * Gets the next element
	 */
	next(): any {
		return null;
	}

	/**
	 * Checks to see if the iterator has finished or not
	 */
	hasNext(): boolean {
		return false;
	}

}

