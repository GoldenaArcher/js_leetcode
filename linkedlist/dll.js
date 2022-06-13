class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DLL {
  // add node to the head of the dll
  push(data) {
    const newNode = data instanceof Node ? data : new Node(data);
    newNode.next = this.head || null;

    if (this.head) this.head.prev = newNode;

    this.head = newNode;
  }

  insertAfter(prevNode, data) {
    if (!prevNode) return;

    const newNode = data instanceof Node ? data : new Node(data);

    newNode;
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;

    newNode.prev = prevNode;
    nextNode.prev = newNode;
  }

  append(data) {
    const newNode = data instanceof Node ? data : new Node(data);

    if (!this.head) return (this.head = newNode);

    let last = this.head;
    while (last.next !== null) last = last.next;
    last.next = newNode;
    newNode.prev = last;
  }

  moveToHead(node) {
    const prevNode = node.prev,
      nextNode = node.next;

    prevNode.next = nextNode;
    if (nextNode) nextNode.prev = prevNode;

    node.next = this.head;
    this.head = node;
  }
}

const logDLL = (dll) => {
  const str = [];
  let head = dll.head;
  while (head.next) {
    str.push(head.val, "->");
    head = head.next;
  }

  str.push(head.val);

  console.log(str.join(" "));
};

const node8 = new Node(8);
const node9 = new Node(9);
const node10 = new Node(10);
const node11 = new Node(11);
const node1 = new Node(1);

const dll = new DLL();

dll.append(node11);

dll.push(node10);

dll.push(node8);

dll.append(node1);

dll.insertAfter(node8, node9);

logDLL(dll);

dll.moveToHead(node1);

logDLL(dll);
