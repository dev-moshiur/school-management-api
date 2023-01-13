const jwt = require("jsonwebtoken");
const dataGuard = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username, userId, isAdmin } = decoded;
    if (isAdmin) {
      next();
    } else {
      next("Authentication Error");
    }
  } catch (error) {
    next("Authentication Error");
  }
};

module.exports = dataGuard;
