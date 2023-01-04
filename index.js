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
