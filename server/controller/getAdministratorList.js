const fs = require("fs");

const getAdministratorList = () => {
  const administratorData = fs.readFileSync(
    "./model/staffs/administrators.json"
  );
  const administratorArr = JSON.parse(administratorData);
  return administratorArr;
};

module.exports = getAdministratorList;
