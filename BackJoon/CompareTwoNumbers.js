// 두 숫자를 비교하는 코드입니다요!

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const firstNum = input[0].parseInt((num) => parseInt(num));
const secondNum = input[1].parseInt((num) => parseInt(num));

if(firstNum < secondNum) console.log(`${fistNum} 이/가 ${secondNum} 보다 작다는 점`);
else if (firstNum > secondNum) console.log(`${firstNum} 이/가 ${secondNum} 보다 크다는 점`);
else console.log(`${firstNum}와/과 ${secondNum}, 두 수의 크기가 같다는 점`);``