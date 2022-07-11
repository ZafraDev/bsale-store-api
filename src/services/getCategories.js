const db = require("../config/db");
const { handleStructure, response } = require("../utils");

exports.handler = handleStructure(async (event, context) => {
  const results = await db.query("select * from category");

  db.end();

  return response(200, {
    totalItems: results.length,
    items: results,
  });
});
