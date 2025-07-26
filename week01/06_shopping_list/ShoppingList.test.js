const ShoppingList = require('./ShoppingList.js');

test("Creating a shopping list", () => {
	let slist = new ShoppingList();

	expect(slist).not.toNull();
});

test("Shopping list with an empty list", () => {
	let slist = new ShoppingList();

	expect(slist.list()).toEqual([]);
});


test("Shopping list adding one item", () => {
	let slist = new ShoppingList();
	slist.addItem("Milk")
	expect(slist.list()).toEqual([{ name: "Milk", completed: false }]);
});


test("Shopping list adding one item and marking as complete", () => {
	let slist = new ShoppingList();

	slist.addItem("Milk");
	slist.markItemAsComplete(0);
	
	expect(slist.list()).toEqual([{ name: "Milk", completed: true }]);

});


test("Shopping list adding three", () => {
	let slist = new ShoppingList();

	
	slist.addItem("Milk");
	slist.addItem("Bread");
	slist.addItem("Biscuits");
	expect(slist.list()).toEqual([
		{ name: "Milk", completed: false },
		{ name: "Bread", completed: false },
		{ name: "Biscuits", completed: false },
	]);
})


test("Shopping list adding three, checking getItem(1)", () => {
	let slist = new ShoppingList();

	
	slist.addItem("Milk");
	slist.addItem("Bread");
	slist.addItem("Biscuits");
	expect(slist.getItem(1)).toBe({name: "Bread", completed: false});
});


test("Shopping list adding three and removing first", () => {
	let slist = new ShoppingList();

	
	slist.addItem("Milk");
	slist.addItem("Bread");
	slist.addItem("Biscuits");
	slist.removeItem(0);
	expect(slist.list()).toEqual([
		{ name: "Bread", completed: false },
		{ name: "Biscuits", completed: false },
	]);
});

test("Shopping list adding three and removing last", () => {
	let slist = new ShoppingList();

	
	slist.addItem("Milk");
	slist.addItem("Bread");
	slist.addItem("Biscuits");
	slist.removeItem(2);
	expect(slist.list()).toEqual([
		{ name: "Milk", completed: false },
		{ name: "Bread", completed: false },
	]);
});

test("Shopping list adding three and removing all", () => {
	let slist = new ShoppingList();

	
	slist.addItem("Milk");
	slist.addItem("Bread");
	slist.addItem("Biscuits");
	slist.removeItem(0);
	slist.removeItem(0);
	slist.removeItem(0);
	expect(slist.list()).toEqual([
	]);
});

