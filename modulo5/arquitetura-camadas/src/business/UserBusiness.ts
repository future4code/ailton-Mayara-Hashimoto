import { Login, User, Users, USER_ROLES } from "../models/User";
import { MissingFields } from "../error/missingFields";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export class UserBusiness {
    constructor (
        private userDataBase:UserDatabase, private authenticator:Authenticator,
        private hashManager:HashManager, private idGenarator:IdGenerator
    ) {    }
    public signup = async (users:Users):Promise<any> => {
        const {name, email, password}:Users = users;
        
        if (!name || !email || !password) throw new MissingFields();
        if (password.length < 3) {
            throw new Error("Password must have more than 3 carachters")
        }
        const verify = await this.userDataBase.verifyEmail(email)
        if (verify) {
            throw new Error("Email already exists")
        }
        const id = this.idGenarator.generate()
        const hashPass = await this.hashManager.hash(password)
        const role = USER_ROLES.NORMAL
        const user = new User(id, name, email, hashPass, role)
        await this.userDataBase.signup(user)

        const token = this.authenticator.generateToken({id, role})
        return {token, role}
    }
    public login = async (user:Login):Promise<string> => {
        const {email, password}:Login = user;
        if(!email || !password) throw new MissingFields();
        if (password.length < 3) {
            throw new Error("Password must have more than 3 carachters")
        }
        const verify = await this.userDataBase.verifyEmail(email)
        if (!verify) {
            throw new Error("This email does not exist")
        }
        const verifyToken = await this.hashManager.compare(password, verify.getPassword())
        if (!verifyToken) {
            throw new Error("Password is INCORRECT")
        }
        const token = this.authenticator.generateToken({id: verify.getId(), role: verify.getRole()})
        return token
    }
}