const Joi = require("joi");

const CategoryValidation = Joi.object({
  name: Joi.string().alphanum().min(2).max(30).required(),

});

module.exports = CategoryValidation;
