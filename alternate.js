/**
    Given a linked list, rearrange the node values such that they appear in alternating low -> high -> low -> high ... form. 
    For example, given 1 -> 2 -> 3 -> 4 -> 5, you should return 1 -> 3 -> 2 -> 5 -> 4.
*/

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	// Creating linked list.

	add(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
		} else {
			if (this.length === 1) {
				this.head.next = newNode;
			} else {
				let currNode = this.head;
				let prevNode;

				while (currNode) {
					prevNode = currNode;
					currNode = currNode.next;
				}

				currNode = newNode;
				prevNode.next = currNode;
			}
		}

		this.length++;
	}

	// helper function to get current node and next node.

	get(index) {
		let i = 0;
		let currNode = this.head;

		while (i < this.length) {
			if (i === index) {
				return { curr: currNode, next: currNode.next };
			}
			currNode = currNode.next;
			i++;
		}
	}

	alternate() {
		/**
          1. Create a variable i = 1.
          2. Create a variable altVal = null, currVal = null.
          3. While loop, where i < this.length.
          4. Create a variable nodeSet = this.get(i). this.get(i) will return an object consists of current node and next node.
          5. Create a variable currNode = nodeSet.curr.
          6. Create a variable nextNode = nodeSet.next.
          7. Reassign altVal = nextNode.val.
          8. Reassign nextNode.val = currNode.val.
          9. Reassign currNode.val = altVal.
          10. i += 2.
          11. Return this.
       */

		let i = 1;
		let altVal = null;

		while (i < this.length) {
			const nodeSet = this.get(i);
			const currNode = nodeSet.curr;
			const nextNode = nodeSet.next;

			altVal = nextNode.val;
			nextNode.val = currNode.val;
			currNode.val = altVal;

			i += 2;
		}

		return this;
	}
}

const ll = new LinkedList();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

console.log(ll);
console.log(ll.alternate());
