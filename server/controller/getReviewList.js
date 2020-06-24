const fs = require("fs");
const path = require("path");

const getReviewList = () => {
  const ReviewData = fs.readFileSync(
    path.resolve(__dirname, "../model/reviews/reviews.json")
  );
  const ReviewArr = JSON.parse(ReviewData);
  return ReviewArr;
};

module.exports = getReviewList;
