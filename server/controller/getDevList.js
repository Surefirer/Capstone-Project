const fs = require("fs");

const getDevList = () => {
  const DevData = fs.readFileSync("./model/staffs/developers.json");
  const DevArr = JSON.parse(DevData);
  return DevArr;
};

module.exports = getDevList;
