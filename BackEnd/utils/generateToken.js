const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, "karthik254" , {
    expiresIn: "30d",
  });
};

module.exports = generateToken;