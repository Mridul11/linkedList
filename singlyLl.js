//singly linkedlist
var singly = function(){
  this.head = null
}

singly.prototype.push = function(val){
  node = {
    value : val,
    next : null
  }
  if(!this.head){
    this.head = node
  } else{
    current = this.head
    while(current.next){
      current = current.next
    }
    current.next = node
  }
}

var sll = new singly()
sll.push(23)
sll.push(12)
sll.push(4)
sll.push(90)

console.log(sll.head)
console.log(sll.head.next)
console.log(sll.head.next.next)
console.log(sll.head.next.next.next)
