const inpStr = '{[]}{{}}()}';

const isBalanced = (str) => {
  const stack = [];
  let flag = true;
  const brackets = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  const strArr = str.split('');
  strArr.map((item) => {
    if (item == '{' || item == '(' || item == '[') {
      stack.push(brackets[item]);
    } else {
      flag = item == stack.pop();
    }
  });
  if (stack.length != 0) {
    flag = false;
  }
  if (flag) {
    console.log('balanced');
  } else {
    console.log('not balanced');
  }
};

// isBalanced(inpStr);

const getSecondLargest = (arr) => {
  let largest = arr[0];
  let secondLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  console.log('second largest: ', secondLargest);
};

// getSecondLargest([10, 122, 12, 188, 1444, 100]);

// diagonal sum
const digonalSum = (arr) => {
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length == arr[i].length) {
      firstDiagonalSum = firstDiagonalSum + arr[i][i];
      secondDiagonalSum = secondDiagonalSum + arr[i][arr.length - i - 1];
    }
  }
  console.log('firstDiagonalSum', firstDiagonalSum);
  console.log('secondDiagonalSum', secondDiagonalSum);
};

// digonalSum([
//   [10, 12, 14],
//   [9, 8, 2],
//   [5, 2, 1],
// ]);

function addDigits(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

function convertToNumber(str) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num = num * 10 + (str.charCodeAt(i) - 48);
  }
  return num;
}

function reverseArray(arr) {
  let reverseArr = [...arr];
  for (let i = 0; i < Math.floor(reverseArr.length / 2); i++) {
    let temp = reverseArr[i];
    reverseArr[i] = reverseArr[reverseArr.length - i - 1];
    reverseArr[reverseArr.length - i - 1] = temp;
  }
  console.log(reverseArr);
}

// reverseArray([10, 12, 41, 21]);

function miniMaxSum(arr) {
  // Write your code here
  let arrSums = [];
  for (let i = 0; i < arr.length; i++) {
    let tempArr = [...arr];
    tempArr.splice(i, 1);
    let temp = tempArr.reduce((a, b) => a + b, 0);
    arrSums.push(temp);
  }
  let min = Math.min(...arrSums);
  let max = Math.max(...arrSums);
  console.log(min, max);
}

// miniMaxSum([5, 5, 5, 5]);

const countSort = () => {
  let str =
    '63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33';
  let arr = str.split(' ');
  const countArr = new Array(100);
  countArr.fill(0);
  for (let i = 0; i < 100; i++) {
    countArr[parseInt(arr[i])]++;
  }
  return countArr;
};
countSort();
