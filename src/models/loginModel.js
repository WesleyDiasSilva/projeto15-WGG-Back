import Joi from "joi";

export const schemaLogin = Joi.object({
  emailOrUsername: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

export const schemaEmail = Joi.object({
  email: Joi.string().email(),
});
