class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  print() {
    let l1 = this.head;
    let res = [];

    while (l1?.next) {
      res.push(l1?.val, "<->");
      l1 = l1.next;
    }

    res.push(l1?.val);

    console.log(res.join(" "));
  }

  appendToHead(node) {
    const newNode = node instanceof Node ? node : new Node(node);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  appendToTail(node) {
    const newNode = node instanceof Node ? node : new Node(node);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  moveToHead(node) {
    if (node === this.head) return ;

    const prev = node.prev, next = node.next;
    prev.next = next;
    if (next) next.prev = prev;
    if (node === this.tail) this.tail = prev;

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  removeTail() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return ;
    }

    const prev = this.tail.prev;
    prev.next = null;
    this.tail = prev;
  }
}

const node5 = new Node(5);
const node10 = new Node(10);

const dll = new DLL();

dll.appendToHead(7);
dll.appendToHead(node5);

dll.print();

dll.appendToTail(8);
dll.appendToTail(node10);

dll.print();

dll.moveToHead(node5)
dll.moveToHead(node10)
dll.moveToHead(node5)
dll.print()

dll.removeTail();
dll.print()
