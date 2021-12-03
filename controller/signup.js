const UsersModel = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signUpController = async ({ email, phoneNumber, password }) => {
  const data = await UsersModel.find({ email: email });
  const salts = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));
  const hashedPassword = bcrypt.hashSync(password, salts);
  console.log("abhi", data);
  if (data.length === 0) {
    let new_user = await UsersModel.create({
      email: email,
      phoneNumber: phoneNumber,
      password: hashedPassword,
    });
    return jwt.sign({ id: new_user._id }, process.env.JWT_SECRET);
  } else {
    return null;
  }
};
