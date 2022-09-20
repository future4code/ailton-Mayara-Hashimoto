import { Users } from "../models/User";
import { MissingFields } from "../error/missingFields";


export class UserBusiness {
    public signup = async (users:Users):Promise<any> => {
        const {name, email, password}:Users = users;
        
        if (!name || !email || !password) throw new MissingFields();
        if (password.length < 3) {
            throw new Error("Password must have more than 3 carachters")
        }
        
        return ""
    }
}