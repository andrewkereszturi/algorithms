const swapPairs = (head) => {

    if(head === null || head.next === null) {
        return head
    }

    let first = head.val
    head.val = head.next.val
    head.next.val = first
    head.next.next = swapPairs(head.next.next);
    return head
    
}

// [2,1,4,3]
console.log(swapPairs([[1,2,3,4]]))

// First working solution

// const swapPairs = (head, prev = null) => {
//     if (head === null || head.next === null){
//         if(prev === null) {
//             return head
//         }
//         return prev;
//     } 
//     const next = head.next.next;
//     const first = head.val
//     const second = head.next.val
    
//     if(next !== null && next.next === null) {
//         head.val = second
//         head.next.val = first
//         head.next.next.val = next.val
//         if (prev === null){
//             return head
//         } else {
//             let temp = prev
//             while(prev !== null) {
//                 if(prev.next.next === null) {
//                     prev.next.next = head
//                     return temp
//                 }
//                 prev = prev.next
//             } 
//         }
//     }

//     head.val = second
//     head.next.val = first
//     head.next.next = null

//     if(prev !== null) {
//         let temp = prev
//         while(prev !== null) {
//             if(prev.next.next === null) {
//                 prev.next.next = head
//                 return swapPairs(next, temp)
//             }
//             prev = prev.next
//         } 
//     } else{
//         prev = head
//     }
//     return swapPairs(next, prev);
    
// }