const numberToReversedDigits = (number) => {
  const strArr = number.toString().split("");

  const numArr = strArr.map((num) => parseInt(num));

  return numArr.reverse();
};

module.exports = numberToReversedDigits;
