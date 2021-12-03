const { required } = require("joi");
const Joi = require("joi");
exports.authSchema = Joi.object({
  email: Joi.string().email().required(),
  phoneNumber: Joi.number().required(),
  password: Joi.string().required(),
});
