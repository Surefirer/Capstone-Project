const fs = require("fs");
const path = require("path");

const getGMList = () => {
  const GMData = fs.readFileSync(
    path.resolve(__dirname, "../model/staffs/gms.json")
  );
  const GMArr = JSON.parse(GMData);
  return GMArr;
};

module.exports = getGMList;
