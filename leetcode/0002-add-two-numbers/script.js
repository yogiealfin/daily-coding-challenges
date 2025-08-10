class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(list) {
  let arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}

function addTwoNumber(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    current.next = new ListNode(digit);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
}

function runTest(arr1, arr2) {
  const l1 = arrayToList(arr1);
  const l2 = arrayToList(arr2);
  const result = addTwoNumber(l1, l2);
  console.log(listToArray(result));
}

runTest([2, 4, 3], [5, 6, 4]);
runTest([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9, 9]);
