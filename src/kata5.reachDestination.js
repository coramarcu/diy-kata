const reachDestination = (distance, speed) => {
  if (typeof distance !== "number" || typeof speed !== "number") {
    return "Please pass numbers as arguments.";
  }

  const time = distance / speed;
  const roundedTime = Math.round(time * 2) / 2;

  return `I should be there in ${roundedTime} hours.`;
};

module.exports = reachDestination;
