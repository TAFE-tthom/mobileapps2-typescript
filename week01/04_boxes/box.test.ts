import {describe, expect, test} from '@jest/globals';

import { Item } from './box';

describe('Item : Testing construction and methods', () => {
	
	test('base construction 1', () => {

		let b = new Item('item 1', 'test', false);
		expect(b.getLabel())
		.toBe('item 1');
		expect(b.getDescription())
		.toBe('test');
		expect(b.getDescription())
		.toBe('test');
		expect(b.isABox())
		.toBe(false);

	});

	test('base construction 2', () => {

		let b = new Item('box 1', 'test', true);
		expect(b.getLabel())
		.toBe('box 1');
		expect(b.getDescription())
		.toBe('test');
		expect(b.getDescription())
		.toBe('test');
		expect(b.isABox())
		.toBe(true);

	});
	test('box - depth 1, one item', () => {

		let b = new Item('box 1', 'test', true);
		b.addItem(new Item('item', 'is an item', 
				   false));
		expect(b.getLabel())
		.toBe('box 1');
		expect(b.getDescription())
		.toBe('test');
		expect(b.getDescription())
		.toBe('test');
		expect(b.isABox())
		.toBe(true);
		expect(b.getContents().length)
		.toBe(1);
		expect(b.getContents()[0].getLabel())
		.toBe('item');
	});

	test('box - depth 1, few items', () => {

		let b = new Item('box 1', 'test', true);
		b.addItem(new Item('item 1', 'is an item', 
				   false));
		b.addItem(new Item('item 2', 'is an item', 
				   false));
		b.addItem(new Item('item 3', 'is an item', 
				   false));
		b.addItem(new Item('item 4', 'is an item', 
				   false));
		expect(b.getLabel())
		.toBe('box 1');
		expect(b.getDescription())
		.toBe('test');
		expect(b.getDescription())
		.toBe('test');
		expect(b.isABox())
		.toBe(true);
		expect(b.getContents().length)
		.toBe(4);
		expect(b.getContents()[3].getLabel())
		.toBe('item 4');
	});

	test('box - depth 2, few items', () => {
		let b2 = new Item('box 2', 'is a second box', 
				   true);
		b2.addItem(new Item('item 3', 'is an item', 
				    false));
		let b = new Item('box 1', 'test', true);
		b.addItem(new Item('item 1', 'is an item', 
				   false));
		b.addItem(b2);
		b.addItem(new Item('item 2', 'is an item', 
				   false));
		expect(b.getLabel())
		.toBe('box 1');
		expect(b.getDescription())
		.toBe('test');
		expect(b.getDescription())
		.toBe('test');
		expect(b.isABox())
		.toBe(true);
		expect(b.getContents().length)
		.toBe(3);
		expect(b.getContents()[1].getLabel())
		.toBe('box 2');
		expect(b.getContents()[1]
		       .getContents()[0].getLabel())
		.toBe('item 3');

	});
});


