const fs = require("fs/promises");
const path = require("path");
const reviewsPath = path.join(__dirname, "/db/reviews.json");

const updateReviews = async (reviews) =>
  await fs.writeFile(reviewsPath, JSON.stringify(reviews, null, 2));

async function listContacts() {
  const data = await fs.readFile(reviewsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

module.exports = {
  listContacts,
  updateReviews,
};
