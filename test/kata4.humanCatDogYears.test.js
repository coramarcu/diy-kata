const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns an array", () => {
    expect(humanCatDogYears(1)).toEqual(expect.any(Array));
  });

  it("returns error message if number passed is 0 or smaller", () => {
    expect(humanCatDogYears(0)).toEqual("Enter a valid age of 1 or above.");
    expect(humanCatDogYears(-3)).toEqual("Enter a valid age of 1 or above.");
  });

  it("returns an array of length 3", () => {
    expect(humanCatDogYears(1)).toHaveLength(3);
    expect(humanCatDogYears(20)).toHaveLength(3);
    expect(humanCatDogYears(93)).toHaveLength(3);
  });

  it("returns the correct ages for number passed: 1", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
  });

  it("returns the correct ages for number passed: 2", () => {
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
  });

  it("returns the correct ages for number passed: >= 3", () => {
    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
    expect(humanCatDogYears(12)).toEqual([12, 64, 74]);
    expect(humanCatDogYears(18)).toEqual([18, 88, 104]);
  });
});
