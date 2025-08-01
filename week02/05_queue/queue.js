"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = exports.QueueNode = void 0;
var QueueNode = /** @class */ (function () {
    function QueueNode(value) {
        this.next = null;
        this.value = value;
    }
    return QueueNode;
}());
exports.QueueNode = QueueNode;
/** LinkedList class **/
var Queue = /** @class */ (function () {
    /**
     * Creates a linkedlist
     * Should initialise the root node of the linked list
     * and size
     */
    function Queue() {
        //TODO: Implement fields
        this.root = null;
    }
    /**
     * Gets the root of the linkedlist,
     * this would be the starting
     * node
     * @return {QueueNode} root -
     * 	Root of the linkedlist
     */
    Queue.prototype.retrieveRoot = function () {
        return null;
    };
    /**
     * Appends an object to the end of the linkedlist
     * @param {number} obj -
     * 	Object to be inserted into the
     * 	linked list
     *
     */
    Queue.prototype.enqueue = function (obj) {
        //TODO: Implement append logic
        if (this.root == null) {
            this.root = new QueueNode(obj);
        }
    };
    /**
     * Removes an element from the queue front, returns it
     * @return {Object} obj -
     * 	Object to be removed or null
     *
     */
    Queue.prototype.dequeue = function () {
        //TODO: Implement remove logic
        return null;
    };
    /**
     * Size of the list, number of elements in the list
     * @return {number} size -
     * 	Number of elements in the list
     */
    Queue.prototype.size = function () {
        //TODO: Return the number of elements 
        // in the linked list
        return 0;
    };
    return Queue;
}());
exports.Queue = Queue;
