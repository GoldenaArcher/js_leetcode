class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  print() {
    let l1 = this.head;
    let res = [];

    while (l1?.next) {
      res.push(l1?.val, "->");
      l1 = l1.next;
    }

    res.push(l1?.val);

    console.log(res.join(" "));
  }

  appendToHead(node) {
    const newNode = node instanceof Node ? node : new Node(node);

    if (!this.head) return (this.head = newNode);

    newNode.next = this.head;
    this.head = newNode;
  }

  appendToTail(node) {
    const newNode = node instanceof Node ? node : new Node(node);

    if (!this.head) return (this.head = newNode);

    let l = this.head;
    while (l.next) {
      l = l.next;
    }

    l.next = newNode;
  }

  appendAfter(prevNode, node) {
    const newNode = node instanceof Node ? node : new Node(node);

    // 可以抛错，这里就直接返回了
    if (!prevNode) return;

    const next = prevNode.next;

    prevNode.next = newNode;
    newNode.next = next;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node10 = new Node(10);
const node15 = new Node(15);

const ll = new LinkedList();
ll.print();

ll.appendToHead(node10);
ll.print();
ll.appendToHead(8);
ll.print();
ll.appendToHead(7);
ll.print();
ll.appendToHead(node1);

ll.appendToTail(12);
ll.print();
ll.appendToTail(node15);
ll.print();

ll.appendAfter(node15, 20);
ll.print();
ll.appendAfter(node1, node2)
ll.print();
ll.appendAfter(node2, node3)
ll.print();
