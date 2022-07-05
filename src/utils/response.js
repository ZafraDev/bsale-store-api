const response = (status = 200, body) => {
  return {
    body: JSON.stringify(body),
    statusCode: status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  };
};

module.exports = { response };
