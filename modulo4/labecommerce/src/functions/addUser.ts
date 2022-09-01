import { addUser } from "../data/data"
import { users } from "../types/types"

export async function createUser (req:any, res:any) {
    try {
        const id = req.body.id
        if (!id) {res.statusCode = 404 
            throw new Error ("id missing")}
        const name = req.body.name
        if (!name) {res.statusCode = 404 
            throw new Error ("name missing")}
        const email = req.body.email
        if (!email) {res.statusCode = 404 
            throw new Error ("email missing")}
        const password = req.body.password
        if (!password) {res.statusCode = 404 
            throw new Error ("something went wrong")}
        const newUser:users = {
            id:id, name:name, email:email, password:password
        } 
        await addUser(newUser)
        res.status(201).send("User added!")
    }  
    catch (err:any) { res.status(404).send({message: err.message}) }
}