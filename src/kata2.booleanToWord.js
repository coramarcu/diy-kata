const booleanToWord = (boolean) => {
  if (boolean === true) {
    return "true";
  }

  if (boolean === false) {
    return "false";
  }

  return "not a boolean";
};

module.exports = booleanToWord;
