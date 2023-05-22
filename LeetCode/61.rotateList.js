// const removeLastNode = (head) => {
//     if (head === null || head.next === null){
//         return null;
//     }
//     let newTail = head;
//     while (newTail.next.next !== null) {
//         newTail = newTail.next;
//     }
//     newTail.next = null;
//     return head;
// }
 
// var rotateRight = function(head, k) {  
//     if (!head || k === 0) {
//         return head;
//     } 
//     let l1 = head
//     while(l1.next !== null) {
//         l1 = l1.next
//     }
//     const oneLess = removeLastNode(head);

//     l1.next = oneLess
//     return rotateRight(l1, --k)

// };

// Cleaned up Solution 
const removeLastNode = (head) => {
    if (head === null || head.next === null){
        return null;
    }
    let newTail = head;
    while (newTail.next.next !== null) {
        newTail = newTail.next;
    }
    newTail.next = null;
    return head;
}

const getLastNode = (head) => {
    if (head === null || head.next === null){
        return null;
    }
    let newTail = head;
    while (newTail.next.next !== null) {
        newTail = newTail.next;
    }
    return newTail.next;
    
}
 
var rotateRight = function(head, k) {  

    if(!head || !head.next) {
        return head
    } 

    let l1 = head
    for(let i = 0; i < k; i++) {
        let newHead = getLastNode(l1)
        let tail = removeLastNode(l1);
        newHead.next = tail
        l1 = newHead
    }
    return l1
};