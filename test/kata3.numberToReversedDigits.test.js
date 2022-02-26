const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns an array", () => {
    expect(numberToReversedDigits(123)).toEqual(expect.any(Array));
  });

  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
  });
});
