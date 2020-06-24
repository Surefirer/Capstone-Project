const fs = require("fs");
const path = require("path");

const getDevList = () => {
  const DevData = fs.readFileSync(
    path.resolve(__dirname, "../model/staffs/developers.json")
  );
  const DevArr = JSON.parse(DevData);
  return DevArr;
};

module.exports = getDevList;
