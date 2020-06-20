const fs = require("fs");

const getGMList = () => {
  const GMData = fs.readFileSync("./model/staffs/gms.json");
  const GMArr = JSON.parse(GMData);
  return GMArr;
};

module.exports = getGMList;
