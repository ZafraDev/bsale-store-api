// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "bsale-store-api",
    "version": "1"
  },
  "paths": {
    "/categories": {
      "get": {
        "summary": "getCategories",
        "description": "",
        "operationId": "getCategories.get./categories",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/products/categories/{categoryId}": {
      "get": {
        "summary": "getProductsByCategory",
        "description": "",
        "operationId": "getProductsByCategory.get./products/categories/{categoryId}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "categoryId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {},
  "securityDefinitions": {}
};