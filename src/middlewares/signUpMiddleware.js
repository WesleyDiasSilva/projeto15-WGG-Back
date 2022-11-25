import {signUpSchema} from "../models/signUpModel.js"

export function signUpMiddleware(req, res, next){
    const user = req.body
    const validation = signUpSchema.validate(user, {abortEarly: false})

    if(validation.error){
        const messageError = validation.error.details.map(detail => detail.message)
        
        res.status(422).send(messageError)
        return 
    }

    next()
}
