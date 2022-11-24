import bcrypt from "bcrypt";
import { connectionUser } from "../database/connection.js";

export async function signUp(req, res) {
    const user = req.body;
 
    try{
        const emailExist = await connectionUser.findOne({email: user.email})
        const usernameExist = await connectionUser.findOne({username: user.username})
        
        if(emailExist){
            res.status(409).send({message: "Email já cadastrado!"})
            return
        }
        if(usernameExist){
            res.status(409).send({message: "Username já existente!"})
            return
        }

        const hashPassword = bcrypt.hashSync(user.password, 10)
        await connectionUser.insertOne({...user, password: hashPassword})
        res.sendStatus(201)

    } catch (error){
        console.log(error)
        res.sendStatus(500)
    }

}