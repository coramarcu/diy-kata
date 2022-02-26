const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns a string", () => {
    expect(booleanToWord(true)).toEqual(expect.any(String));
  });

  it("returns string 'true' if it evaluates to true", () => {
    expect(booleanToWord(10 > 5)).toEqual("true");
    expect(booleanToWord(true)).toEqual("true");
  });

  it("returns string 'false' if it evaluates to false", () => {
    expect(booleanToWord(10 < 5)).toEqual("false");
    expect(booleanToWord(false)).toEqual("false");
  })

  it("returns the string 'not a boolean' if the value passed does not evaluate to either true or false", () => {
    expect(booleanToWord(10)).toEqual("not a boolean");
    expect(booleanToWord("true")).toEqual("not a boolean");
    expect(booleanToWord("false")).toEqual("not a boolean");
  });


});
