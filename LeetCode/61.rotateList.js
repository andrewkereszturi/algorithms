const removeLastNode = (head) => {
    if(!head || !head.next) {
        return head
    } 

    let newHead = head;

    // Loop through list until second to last node
    while (newHead.next.next !== null) {
        newHead = newHead.next;
    }
    
    // Set last node to null and return new list
    newHead.next = null;
    return head;
}

const getLastNode = (head) => {
    if(!head || !head.next) {
        return head
    } 

    let newTail = head;

    // Loop through list to last node
    while (newTail.next !== null) {
        newTail = newTail.next;
    }

    // Return last node
    return newTail;
    
}
 
var rotateRight = function(head, k) {  

    if(!head || !head.next) {
        return head
    } 

    let l1 = head

    // loop through list to get its length
    let length = 0
    while (l1 !== null) {
        length++
        l1 = l1.next
    }
    
    l1 = head

    // rotate k % i times
    for(let i = 0; i < k % length; i++) {

        // pop tail node from list, save it as newHead
        let newHead = getLastNode(l1)

        // return list without the tail node
        let newTail = removeLastNode(l1)
    
        // cobine new head and tail
        newHead.next = newTail

        // assign newHead value to l1 to be able to return it outside the loop
        l1 = newHead
    }

    return l1
};
