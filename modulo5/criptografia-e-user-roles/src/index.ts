import { app } from "./app";
import { Request, Response } from 'express'
import { createId } from "./data/ids";
import { createToken } from './data/token'
import { createUser } from "./endpoints/addUser";
import { getUser } from "./endpoints/login";
import { getData } from "./data/tokenData"
import { compare } from "bcryptjs";
import { hash } from "./services/hash"

app.post("/user/signup", async (req:Request, res:Response) => {
    try {
        const userData = { email: req.body.email, 
                           password: req.body.password, 
                           role:req.body.role }
        const id = createId();
        const hashPassword = await hash(userData.password)
        await createUser(id, userData.email, hashPassword, userData.role)
        const token = createToken({id, role:userData.role});

        res.status(200).send({token})
    }
    catch (err:any) { res.status(400).send({message: err.message}) }
});

app.post("/user/login", async (req:Request, res:Response) => {
    try {
        if (!req.body.email || req.body.emailindexOd("@") === -1) {
            throw new Error("Invalid email")} 
        const userData = { email: req.body.email, password: req.body.password }
        const user = await getUser(userData.email)
        const compareResult = await compare(userData.password, user.password)
        if (compareResult) { throw new Error("Invalid password")}
        const token = createToken({id:user.id, role:user.role})
        res.status(200).send({token})
    }
    catch (err:any) {res.status(400).send({message:err.message})}
});

app.get("/user/profile", async (req:Request, res:Response) => {
    try {
        const token = req.headers.authorization as string
        const authenticationData = getData(token)
         if (authenticationData.role !== "normal") {
            throw new Error("Only normal users can access this funcionality")
         }
         const user = await getUser(authenticationData.id)
        res.status(200).send({ id: user.id, email: user.email, role:authenticationData.role})
    }
    catch (err:any) {res.status(400).send({message: err.message})}
})