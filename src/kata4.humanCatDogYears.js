const humanCatDogYears = (number) => {
  let catAge = 0;
  let dogAge = 0;

  if (number <= 0) {
    return "Enter a valid age of 1 or above.";
  }

  if (number === 1) {
    catAge = 15;
    dogAge = 15;
  }

  if (number === 2) {
    catAge = 24;
    dogAge = 24;
  }

  if (number >= 3) {
    catAge = 24 + (number - 2) * 4;
    dogAge = 24 + (number - 2) * 5;
  }

  return [number, catAge, dogAge];
};

module.exports = humanCatDogYears;
