
/**
 * Goal, you are to design and implement a class
 * that will allow packing of objects inside it
 * or represent the object itself.
 *
 * The class `Item` will contain:
 * 	* label
 * 	* description
 * 	* know if it is a box
 * 	* if a box, have other items inside it.
 *
 * Implement the methods associated
 *
 */
export class Item {
	
	label: string
	description: string
	isBox: boolean
	contents: Array<Item> = [];

	constructor(label: string, description: string, 
		    isBox: boolean) {
	}

	getLabel(): string {
	}

	getDescription(): string {
	}

	getContents(): Array<Item> {
	}

	addItem(item: Item): void {
	}

	isABox(): boolean {
	}



}
