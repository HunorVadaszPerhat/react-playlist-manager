export class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  export class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      if (!this.head) {
        this.head = new ListNode(data);
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = new ListNode(data);
      }
    }
  
    removeById(id) {
      if (!this.head) return;
  
      if (this.head.data.id === id) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next && current.next.data.id !== id) {
        current = current.next;
      }
  
      if (current.next) {
        current.next = current.next.next;
      }
    }
  
    toArray() {
      const array = [];
      let current = this.head;
      while (current) {
        array.push(current.data);
        current = current.next;
      }
      return array;
    }
  }
  