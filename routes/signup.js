const express = require("express");
const router = express.Router();
const { authSchema } = require("../helpers/validations");
const { signUpController } = require("../controller/signup");
router.post("/signup", async (req, res) => {
  try {
    const { value, error } = authSchema.validate(req.body);
    if (error) {
      throw {
        status: 422,
        message: "Validation error",
      };
    } else {
      const val = await signUpController(value);
      if (val !== null) {
        res.status(201).json({
          message: "User Created",
          token: val,
        });
      } else {
        res.status(403).json({
          message: "User already exists",
        });
      }
    }
  } catch (err) {
    res.status(err.status || 500).json({
      message: err.message || "Internal error occured",
    });
  }
});

module.exports = router;
