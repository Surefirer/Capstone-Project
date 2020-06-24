const fs = require("fs");
const path = require("path");

const getAdministratorList = () => {
  const administratorData = fs.readFileSync(
    path.resolve(__dirname, "../model/staffs/administrators.json")
  );
  const administratorArr = JSON.parse(administratorData);
  return administratorArr;
};

module.exports = getAdministratorList;
