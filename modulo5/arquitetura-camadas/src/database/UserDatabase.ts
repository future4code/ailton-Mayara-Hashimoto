import { User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    public verifyEmail = async (email:string):Promise<User|undefined> => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
                    .select("*").where({email})
                if (!result.length) {
                    return undefined
                }
            return new User(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role)
    }
    public signup = async (user:User):Promise<void> => {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
                    .insert({id:user.getId(), name:user.getName(), email:user.getEmail(),
                             password:user.getPassword(), role:user.getRole()})
    }
=======
    
}