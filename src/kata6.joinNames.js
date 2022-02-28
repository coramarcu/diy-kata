const joinNames = (namesObj) => {
  // checks that the argument is an array
  if (!Array.isArray(namesObj)) {
    return "Please pass an array of Objects.";
  }
  // checks that all elements in array are objects with a name property
  for (object of namesObj) {
    if (typeof object !== "object") {
      return "Please pass an array of Objects.";
    }
    if (!object.hasOwnProperty("name")) {
      return "Please pass an array of Objects.";
    }
  }

  const namesArr = namesObj.map((obj) => obj.name);
  const lastName = namesArr.splice(namesArr.length - 1, 1);
  const namesStr = namesArr.reduce((acc, curr) => {
    return acc + `, ${curr}`;
  });

  return `${namesStr} & ${lastName}`;
};

module.exports = joinNames;
