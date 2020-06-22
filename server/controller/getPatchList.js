const fs = require("fs");

const getPatchList = () => {
  const PatchData = fs.readFileSync("./model/patchs/patchs.json");
  const PatchArr = JSON.parse(PatchData);
  return PatchArr;
};

module.exports = getPatchList;
