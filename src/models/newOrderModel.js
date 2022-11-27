import Joi from "joi";

export const schemaNewOrder = Joi.object({
  username: Joi.string().required(),
  games: Joi.array().required()
})