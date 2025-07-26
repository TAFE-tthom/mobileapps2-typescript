"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const linkedlist_1 = require("./linkedlist");
(0, globals_1.test)("constructing linkedlist", () => {
    let list = new linkedlist_1.LinkedList();
    (0, globals_1.expect)(list).toBeDefined();
});
(0, globals_1.test)("root of the linkedlist is null", () => {
    let list = new linkedlist_1.LinkedList();
    let rootObj = list.retrieveRoot();
    (0, globals_1.expect)(rootObj).toBeNull();
});
(0, globals_1.test)("linkedlist append to root", () => {
    let list = new linkedlist_1.LinkedList();
    list.append(1);
    let rootObj = list.retrieveRoot();
    (0, globals_1.expect)(rootObj).not.toBeNull();
});
(0, globals_1.test)("linkedlist append and retrieve(0)", () => {
    let list = new linkedlist_1.LinkedList();
    list.append(1);
    let rootObj = list.retrieveRoot();
    (0, globals_1.expect)(rootObj).toBeDefined();
    let objRetrieved = list.retrieve(0);
    (0, globals_1.expect)(objRetrieved).toBe(1);
});
(0, globals_1.test)("linkedlist multiple-append and retrieve(1)", () => {
    let list = new linkedlist_1.LinkedList();
    list.append(10);
    list.append(20);
    let rootObj = list.retrieveRoot();
    (0, globals_1.expect)(rootObj).toBeDefined();
    let objRetrieved = list.retrieve(1);
    (0, globals_1.expect)(objRetrieved).toBe(20);
});
(0, globals_1.test)("linkedlist multiple-append and retrieve(3)", () => {
    let list = new linkedlist_1.LinkedList();
    list.append(10);
    list.append(20);
    list.append(30);
    list.append(40);
    list.append(50);
    let rootObj = list.retrieveRoot();
    (0, globals_1.expect)(rootObj).toBeDefined();
    let objRetrieved = list.retrieve(3);
    (0, globals_1.expect)(objRetrieved).toBe(40);
});
(0, globals_1.test)("linkedlist append once and remove(0)", () => {
    let list = new linkedlist_1.LinkedList();
    list.append(10);
    let obj = list.remove(0);
    (0, globals_1.expect)(obj).toBe(10);
});
(0, globals_1.test)("linkedlist multiple append and remove(1)", () => {
    let list = new linkedlist_1.LinkedList();
    list.append(10);
    list.append(20);
    list.append(30);
    list.append(40);
    list.append(50);
    let obj = list.remove(1);
    (0, globals_1.expect)(obj).toBe(20);
});
(0, globals_1.test)("linkedlist multiple append and remove(3)", () => {
    let list = new linkedlist_1.LinkedList();
    list.append(10);
    list.append(20);
    list.append(30);
    list.append(40);
    list.append(50);
    let obj = list.remove(3);
    (0, globals_1.expect)(obj).toBe(40);
});
(0, globals_1.test)("linkedlist check size() is 0", () => {
    let list = new linkedlist_1.LinkedList();
    (0, globals_1.expect)(list.size()).toBe(0);
});
