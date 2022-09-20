import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness";
import { Users } from "../models/User"

export class UserController {
    public signup = async (req:Request, res: Response) => {
        try {
            const { name, email, password }:Users = req.body;
            const uBusiness = new UserBusiness();
            const nUser:Users = { name, email, password }
            const data = await uBusiness.signup(nUser);

            res.status(200).send({message: "User created.", data})
        }
        catch (err:any) {
            res.status(err.statusCode || 500).send({message: err.message})
        }
    }

}