const { joinNames } = require("../src");

describe("joinNames", () => {
  const numArr = [1, 2, 3, 4];
  const randomArr = [{ name: "someName" }, 1, "a thing", true];
  test("returns error message if not called with an array of objects", () => {
    expect(joinNames(numArr)).toEqual("Please pass an array of Objects.");
    expect(joinNames(randomArr)).toEqual("Please pass an array of Objects.");
    expect(joinNames("Tom, Jerry")).toEqual("Please pass an array of Objects.");
  });

  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Alex" }, { name: "Jess" }, { name: "Jack" }])
    ).toEqual("Alex, Jess & Jack");

    expect(
      joinNames([
        { name: "Maya" },
        { name: "Flynn" },
        { name: "Dory" },
        { name: "Rascal" },
      ])
    ).toEqual("Maya, Flynn, Dory & Rascal");
  });
});
