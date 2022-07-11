const { response } = require("../utils/response");

const handleStructure = (cb) => async (event, context) => {
  try {
    return await cb(event, context);
  } catch (error) {
    return response(500, { error: error.message });
  }
};

module.exports = { handleStructure };
