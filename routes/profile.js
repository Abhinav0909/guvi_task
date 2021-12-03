const express = require("express");
const router1 = express.Router();
const { profileController } = require("../controller/profileController");
const jwt = require("jsonwebtoken");
router1.delete("/validate", async (req, res) => {
  try {
    if (req.headers.authorization.length === 0) {
      throw {
        status: "401",
        message: "Access is not authorized",
      };
    } else {
      const token = req.headers.authorization.substring(7);
      console.log("token", req.headers.authorization);
      const data = jwt.verify(token, process.env.JWT_SECRET);

      const val = await profileController(data.id);
      if (val === false) {
        throw {
          status: "401",
          message: "Token is not authorized",
        };
      } else {
        res.status(200).json({
          message: "Profile deleted",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal error occured",
    });
  }
});
module.exports = router1;
