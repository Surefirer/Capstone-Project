const fs = require("fs");

const getReviewList = () => {
  const ReviewData = fs.readFileSync("./model/reviews/reviews.json");
  const ReviewArr = JSON.parse(ReviewData);
  return ReviewArr;
};

module.exports = getReviewList;
