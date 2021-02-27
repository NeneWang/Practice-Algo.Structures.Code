class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value){
      
      let newNode = new Node(value);
      if(this.bottom){
        newNode.next = this.top;
      }else{
        this.bottom = newNode; 
      }
      
      this.top = newNode;
      this.length++;
      
      
    }
    pop(){
      if(this.length==0){
        return null;
      }
      this.top = this.top.next;
      this.length--;
      if(this.length==0){
        this.bottom =  null;
      }
      
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  
  myStack.push("Google")
  
  console.log(myStack)
  console.log(myStack.peek())
  myStack.push("Udemy")
  console.log(myStack.peek())
  myStack.push("Discord")
  console.log(myStack)
  
  
  myStack.pop()
  myStack.pop()
  myStack.pop()
  myStack.pop()
  console.log(myStack)
  
  
  //Discord
  //Udemy
  //google
  