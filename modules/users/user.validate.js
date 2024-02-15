const Joi = require("joi");
const Schema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com"] } }),
  name: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  isActive: Joi.boolean().strict().required(),
  isBlocked: Joi.boolean().strict().required(),
  role: Joi.array().items(Joi.string().valid("user", "admin")).required(),
  dob: Joi.date().min("1-1-1974").required(),
  //Array of roles fixed(admin,user),
  //dob:age>18
});

const validate = async (req, res, next) => {
  const { error, value } = Schema.validate(req.body);
  if (error) next(error.details[0].message);
  else next();
};
module.exports = { validate };
