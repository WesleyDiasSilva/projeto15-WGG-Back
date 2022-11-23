import Joi from "joi";

export const signUpSchema = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    birthday: Joi.number().integer().min(1800).max(2022).required(),
    email: Joi.string().email().required(),
    picture: Joi.string(),
    password: Joi.string().required()
})