const DoublyLinkedList = require('./DoublyLinkedList');


const list = new DoublyLinkedList();

// Testing methods
list.push(10);
list.push(20);
list.push(30);

 console.log("first element = " + list.get(1)); // Output: 20

 list.pop();
console.log("last element after poping it = " + list.get(2)); 

list.unshift(5);
console.log("after signing the value of 5 to the head of the list = " +list.get(0)); 

list.set(1, 50);
console.log("after signing the value of 50 at the index of 1 the index of one value is = " +list.get(1)); 

list.insert(1, 25);
console.log("insert a value of 25 at index of 1 the idex of 1 vale = "+list.get(1));

list.remove(1);
console.log("after removing a node at index of 1 the idex of 1 vale = "+list.get(1));