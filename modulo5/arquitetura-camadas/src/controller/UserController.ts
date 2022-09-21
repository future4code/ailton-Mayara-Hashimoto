import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness";
import { Users } from "../models/User"

export class UserController {
    constructor ( 
        private userBusiness:UserBusiness
    ) {}
    public signup = async (req:Request, res: Response) => {
        try {
            const { name, email, password }:Users = req.body;
            const nUser:Users = { name, email, password }
            const data = await this.userBusiness.signup(nUser);

            res.status(200).send({message: "User created.", data})
        }
        catch (err:any) {
            res.status(err.statusCode || 500).send({message: err.message})
        }
    }
    public login = async (req:Request, res:Response) => {
        try {
            const { email, password } = req.body
            const user = { email, password }
            const token = await this.userBusiness.login(user)
            res.status(200).send({token})
        }
        catch (err:any) {
            res.status(err.statusCode || 500).send({message: err.message})
        }
    }

}