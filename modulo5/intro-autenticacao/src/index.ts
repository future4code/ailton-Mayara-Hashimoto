import { app } from "./app";
import { Request, Response } from 'express'
import { createId } from "./services/ids";
import { createToken } from "./services/token";
import { createUser } from "./endpoints/addUser";
import { getUser } from "./endpoints/login";
import { getData } from "./services/tokenData"

app.post("/user/signup", async (req:Request, res:Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email") }
        if (!req.body.password || req.body.password < 6) {
            throw new Error("Invalid password") }
        const userData = { email: req.body.email, password: req.body.password }
        const id = createId();
        await createUser(id, userData.email, userData.password)
        const token = createToken({id});

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
        if (user.password !== userData.password) {
            throw new Error("Invalid password")}
        const token = createToken({id:user.id})
        res.status(200).send({token})
    }
    catch (err:any) {res.status(400).send({message:err.message})}
});

app.get("/user/profile", async (req:Request, res:Response) => {
    try {
        const token = req.headers.authorization as string
        const authenticationData = getData(token)
        const user = await getUser(authenticationData.id)
        res.status(200).send({ id: user.id, email: user.email})
    }
    catch (err:any) {res.status(400).send({message: err.message})}
})