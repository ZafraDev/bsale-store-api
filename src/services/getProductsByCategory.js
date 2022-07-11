const db = require("../config/db");
const { handleStructure, response } = require("../utils");

exports.handler = handleStructure(async (event, context) => {
  const { categoryId } = event.pathParameters;
  const { search, limit, page } = { ...event.queryStringParameters };

  const CATEGORY = parseInt(categoryId) || 0;
  const LIMIT = limit ? parseInt(limit) || 10 : 10;
  const PAGE = page ? parseInt(page) || 1 : 1;
  const OFFSET = (PAGE - 1) * LIMIT;

  const paginationClause = ` LIMIT ${LIMIT} OFFSET ${OFFSET}`;

  let query =
    "SELECT p.id, p.name, p.url_image, p.price, p.discount FROM product p";
  let totalQuery = "SELECT COUNT(*) as total FROM product p";

  if (CATEGORY !== 0) {
    let whereClause = ` WHERE p.category = ${CATEGORY}`;
    if (search) whereClause += ` AND p.name LIKE '%${search}%'`;
    query += whereClause;
    totalQuery += whereClause;
  } else {
    if (search) {
      let whereClause = ` WHERE p.name LIKE '%${search}%'`;
      query += whereClause;
      totalQuery += whereClause;
    }
  }

  query += paginationClause;

  const results = await db.query(query);
  const resultTotal = await db.query(totalQuery);

  const total = resultTotal[0].total;

  db.end();

  return response(200, {
    items: results,
    page: PAGE,
    totalPages: Math.ceil(total / LIMIT),
    limit: LIMIT,
    totalItems: total,
  });
});
