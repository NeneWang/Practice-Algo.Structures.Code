class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      // Should get the first
      return this.first
    }
    enqueue(value){
      let newNode = new Node(value);
      if(this.length == 0){
        this.first = newNode;
      }else{
        this.last.next = newNode;
      }
  
      this.length++;
      this.last = newNode;
  
    }
    dequeue(){
      if(this.first ===null){
        return null;
      }
      let dequeueNode = this.first;
      this.first = dequeueNode.next;
  
      return dequeueNode;
  
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  console.log(myQueue.peek())
  myQueue.enqueue("Joy");
  myQueue.enqueue("Matt");
  myQueue.enqueue("Pavel");
  myQueue.enqueue("Samir");
  console.log(myQueue);
  myQueue.dequeue();
  
  console.log(myQueue);
  
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  
  
  //Joy
  //Matt
  //Pavel
  //Samir
  
  