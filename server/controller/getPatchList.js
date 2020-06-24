const fs = require("fs");
const path = require("path");

const getPatchList = () => {
  const PatchData = fs.readFileSync(
    path.resolve(__dirname, "../model/patchs/patchs.json")
  );
  const PatchArr = JSON.parse(PatchData);
  return PatchArr;
};

module.exports = getPatchList;
