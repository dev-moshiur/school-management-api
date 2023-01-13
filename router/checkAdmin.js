const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    if (req.cookies.token) {
      const token = req.cookies.token;
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      const { username, userId, isAdmin } = decoded;

      if (isAdmin) {
        res.status(200).json({ admin: true });
      } else {
        res.status(200).json({ admin: false });
      }
    } else {
      res.status(200).json({ admin: false });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
