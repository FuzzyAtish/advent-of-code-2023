import { getTextFromFile } from 'utils.js';

const DIGITS_AS_WORDS: string[] = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

const getNumbersFromLine = (line: string): number[] => {
  let nums: number[] = [];
  [...line].forEach((num, idx) => {
    const val: number = parseInt(num, 10) ?? -1;
    if (val >= 0) {
      nums.push(val);
    } else {
      for (let i = 0; i < DIGITS_AS_WORDS.length; i++) {
        if (
          idx + DIGITS_AS_WORDS[i].length <= line.length &&
          line.substring(idx, idx + DIGITS_AS_WORDS[i].length) ==
            DIGITS_AS_WORDS[i]
        ) {
          nums.push(i + 1);
          break;
        }
      }
    }
  });
  return nums;
};

const getFirstAndLastDigitsAsNumber = (numsArr: number[]): number => {
  return numsArr.length == 0
    ? 0
    : numsArr.length == 1
      ? numsArr[0] * 10 + numsArr[0]
      : numsArr[0] * 10 + numsArr[numsArr.length - 1];
};

export const day1 = (): void => {
  // const lines: string[] = getTextFromFile('./assets/day1-part2-sample.txt');
  const lines: string[] = getTextFromFile('./assets/day1.txt');
  // console.log(lines);
  let sum = 0;
  for (const line of lines) {
    const nums = getNumbersFromLine(line);
    // console.log(nums);
    const firstAndLast = getFirstAndLastDigitsAsNumber(nums);
    // console.log(firstAndLast);
    sum += firstAndLast;
  }
  console.log(sum);
};
