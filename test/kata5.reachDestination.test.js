const { reachDestination } = require("../src");

describe("reachDestination", () => {
  const obj = { name: "objectArg" };
  const arr = [1, "two"];
  test("returns error message if passed argument is not a number", () => {
    expect(reachDestination(obj, 12)).toEqual(
      "Please pass numbers as arguments."
    );
    expect(reachDestination(34, arr)).toEqual(
      "Please pass numbers as arguments."
    );
  });

  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
  });
});
