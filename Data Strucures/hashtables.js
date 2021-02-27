class Node{
    constructor(value, next=null){
      this.node = {
        value: value,
        next: next
      }
    }
  
    addNext(nodeRef){
      this.node.next= nodeRef;
    }
  
    getNode(){
      return this.node;
    }
    }
  
  class LinkedList{
    constructor(value){
      const newNode = new Node(value);
      this.head = newNode.getNode();
  
      this.tail  = this.head;
      this.length = 1;
    }
  
    append(value){
      
      const newNode = new Node(value);
      this.tail.next = newNode.getNode();
      this.tail = newNode.getNode();
      this.length++;
      return this;
      
    }
  
    prepend(value){
      const newNode = new Node(value, this.head);
      // newNode.addNext(this.head)
      
      this.head = newNode.getNode();
      this.length++
      return this;
    }
  
    printList(){
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array;
    }
  
    insert(index, value){
      if(index>=this.length-1){
        this.append(value);
      }
  
      if(index === 0){
          this.prepend(value);
          return this.printList()
      }
      const newNode = new Node(value)
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      
      newNode.addNext(holdingPointer);
      leader.next = newNode.getNode();
      this.length++
      
      return this.printList();
    }
  
    remove(index){
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  
    traverseToIndex(index){
      //check params
      let counter = 0;
      let currentNode = this.head;
      while (counter!== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  
  }
  
  const myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(15);
  myLinkedList.prepend(8);
  
  
  myLinkedList.insert(1, 99);
  
  console.log(myLinkedList.printList())