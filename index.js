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

isBalanced(inpStr);
