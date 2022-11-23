import { schemaLogin } from "../models/loginModel.js";

export function loginMiddleware(req, res, next){
  const { emailOrUsername, password } = req.body;

  const validation = schemaLogin.validate({emailOrUsername, password}, {abortEarly: false})

  if(validation.error){
    res.status(400).send(validation.error)
    return 
  }

  req.locals = { emailOrUsername, password }
  next()
}