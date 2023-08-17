var removeElements = function(head, val) {
    if (!head) {
        return head;
    }
    if (head.val === val) {
        return removeElements(head.next, val);
    }
    
    head.next = removeElements(head.next, val)

    return head;
};