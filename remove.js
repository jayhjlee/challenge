/**
 * Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.
 * The list is very long, so making more than one pass is prohibitively expensive.
 * Do this in constant space and in one pass.
 *
 * 0    1    2    3    4    5
 * 2 -> 4 -> 1 -> 3 -> 6 -> 5
 *
 */

class Node {
	constructor(value) {
		this.val = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = this.tail = null;
		this.length = 0;
	}

	add(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = this.tail = newNode;
			this.head.next = this.tail;
		} else {
			let oldTail = this.tail;
			oldTail.next = newNode;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}

	get(index) {
		if (!this.head || index > this.length) {
			return null;
		} else {
			let current = this.head;
			let end = this.length;
			let indexOfElement = end - index;
			let counter = 0;

			while (counter !== indexOfElement) {
				current = current.next;
				counter++;
			}

			return current;
		}
	}

	getPrevNode(index) {
		if (!this.head || index > this.length) {
			return null;
		} else {
			let current = this.head;
			let end = this.length;
			let indexOfElement = end - index - 1;
			let counter = 0;

			while (counter !== indexOfElement) {
				current = current.next;
				counter++;
			}

			return current;
		}
	}

	remove(index) {
		if (index === this.length) {
			this.head = this.tail = null;
			this.length--;
		} else {
			const node = this.get(index);
			const prevNode = this.getPrevNode(index);

			if (!node) {
				return null;
			} else {
				const oldNode = node;

				prevNode.next = oldNode.next;
				node.next = null;
			}

			this.length--;
		}

		return this;
	}
}

const ll = new LinkedList();

ll.add(2);
ll.add(4);
ll.add(1);
ll.add(3);
ll.add(6);
ll.add(5);

// 2 -> 4 -> 1 -> 3 -> 6 -> 5

console.log(ll.remove(2)); // 2 -> 4 -> 1 -> 3 -> 5
console.log(ll.remove(1)); // 2 -> 4 -> 1 -> 3
console.log(ll.remove(3)); // 2 -> 1 -> 3
console.log(ll.remove(1)); // 2 -> 1
console.log(ll.remove(1)); // 2
console.log(ll.remove(1)); // LinkedList {tail: null, head: null, length: 0}
