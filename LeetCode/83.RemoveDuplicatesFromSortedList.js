var deleteDuplicates = function(head) {

    if (!head || !head.next) {
        return head;
    }

    if (head.val === head.next.val) {
        return deleteDuplicates(head.next)
    }

    head.next = deleteDuplicates(head.next) 

    return head
};