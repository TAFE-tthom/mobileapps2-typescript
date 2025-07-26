

class ShoppingList {
	
	constructor() {
		//Initialise fields you would use
		//Consider something to store the items
	}


	/**
	 * Adds an item, item is a name, will add it to the end of the list
	 * @param {string} item - itemName
	 */
	addItem(item) {
		//TODO
	}


	/**
	 * Removes an item based on an index
	 * @param {number} index - index within the list
	 */
	removeItem(index) {

	}

	/**
	 * Sets an item as complete, your items should be objects
	 * @param {number} index - index within the list
	 */
	markItemAsComplete(index) {

	}

	/**
	 * Uses the index to retrieve the item
	 * @param {number} index - index within the list
	 * @return {Object} item - Object that contains name and completed fields
	 */
	getItem(index) {

		return null;
	}


	/**
	 * Returns the array of the shopping list
	 * @return {Array} list - It will return the array containing the objects
	 * 	that have the fields name and completed.
	 */
	list() {
		return [];
	}

}

module.exports = ShoppingList;
