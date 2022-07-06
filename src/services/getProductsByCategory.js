const db = require("../config/db");
const { response } = require("../utils/response");

exports.handler = async (event, context) => {
  const { categoryId } = event.pathParameters;
  let results;
  if (categoryId === "0")
    results = await db.query(
      `SELECT p.id, p.name, p.url_image, p.price, p.discount
      FROM product p`
    );
  else
    results = await db.query(
      `SELECT p.id, p.name, p.url_image, p.price, p.discount
      FROM product p
      WHERE p.category = ?`,
      [categoryId]
    );

  db.end();

  return response(200, {
    totalItems: results.length,
    items: results,
  });
};
