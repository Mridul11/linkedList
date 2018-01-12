//doubly linkedlist
var doubly = function(){
  this.head = null
}

doubly.prototype.push = function(val){
  var head = this.head
  previous = head
  current = head

  if(!head){
    this.head = {value:val, previous:null, next:null}
  } else{
    current = head
    while(current && current.next){
      previous = current
      current = current.next
    }
    current.next = {value:val, previous:current, next:null}
  }
}

var dll = new doubly()

dll.push(12)
dll.push(11)
dll.push(34)

console.log(dll.head)
console.log(dll.head.next)
console.log(dll.head.next.next)
console.log(dll.head.next.next)
