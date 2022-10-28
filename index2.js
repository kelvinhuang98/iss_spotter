const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPassTimes = (passTimes) => {
  for (const passTime of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(passTime.risetime);
    const duration = passTime.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
