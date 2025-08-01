import {expect, test} from '@jest/globals';

import { Queue } from './queue'

test("constructing queue", () => {
	let list = new Queue<number>();
	expect(list).toBeDefined();
})

test("root of the queue is null", () => {
	let list = new Queue();
	let rootObj = list.retrieveRoot();
	expect(rootObj).toBeNull();
})

test("queue enqueue to root", () => {
	let list = new Queue<number>();
	list.enqueue(1);
	let rootObj = list.retrieveRoot();
	expect(rootObj).not.toBeNull();
})

test("queue enqueue and dequeue()", () => {
	let list = new Queue<number>();
	list.enqueue(1);
	let rootObj = list.retrieveRoot();
	expect(rootObj).toBeDefined();
	let objRetrieved = list.dequeue();
	expect(objRetrieved).toBe(1);
})

test("queue multiple-enqueue and dequeue()", () => {
	let list = new Queue<number>();
	list.enqueue(10);
	list.enqueue(20);
	let rootObj = list.retrieveRoot();
	expect(rootObj).toBeDefined();
	list.dequeue();
	let objRetrieved = list.dequeue();
	expect(objRetrieved).toBe(20);
})

test("queue multiple-enqueue and dequeue()*3", () => {
	let list = new Queue<number>();
	list.enqueue(10);
	list.enqueue(20);
	list.enqueue(30);
	list.enqueue(40);
	list.enqueue(50);
	let rootObj = list.retrieveRoot();
	expect(rootObj).toBeDefined();
	list.dequeue();
	list.dequeue();
	list.dequeue();
	let objRetrieved = list.dequeue();
	expect(objRetrieved).toBe(40);
})


test("queue enqueue once and dequeue()", () => {
	let list = new Queue<number>();
	list.enqueue(10);
	let obj = list.dequeue();
	expect(obj).toBe(10);
})

test("queue multiple enqueue and single dequeue()", () => {
	let list = new Queue<number>();
	list.enqueue(10);
	list.enqueue(20);
	list.enqueue(30);
	list.enqueue(40);
	list.enqueue(50);
	let obj = list.dequeue();
	expect(obj).toBe(10);
})

test("queue multiple enqueue and dequeue()'s'", () => {
	let list = new Queue<number>();
	list.enqueue(10);
	list.enqueue(20);
	list.enqueue(30);
	list.enqueue(40);
	list.enqueue(50);
	let obj = list.dequeue();
	expect(obj).toBe(10);
	obj = list.dequeue();
	expect(obj).toBe(20);
	obj = list.dequeue();
	expect(obj).toBe(30);
})


test("queue check size() is 0", () => {
	let list = new Queue<number>();
	expect(list.size()).toBe(0);
})


