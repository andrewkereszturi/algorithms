var mergeNodes = function(head) {

    if (!head) {
        return head;
    }

    if (head.val === 0) {
        return mergeNodes(head.next)
    }

    let merged = 0;
    while(head.val !== 0) {
        merged += head.val
        head = head.next
    }

    let newHead = new ListNode(merged)

    newHead.next = mergeNodes(head)
    
    return newHead
};