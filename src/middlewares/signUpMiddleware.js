import joi from "joi";

export function signUpMiddleware(req, res, next){
    const signUpSchema = joi.object({
        name: joi.string().required(),
        username: joi.string.min(3).required(),
        birthday: joi.date().format(['YYYY/MM/DD', 'DD-MM-YYY']).required(),
        email: joi.string.email().required(),
        picture: joi.string(),
        password: joi.string.required()
    })
}
