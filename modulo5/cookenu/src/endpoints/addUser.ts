import { connection } from "../connect";
import { User } from "../services/types";

export const createUser = async (
    name:string, email:string, password:string, role:string
) => { await connection.insert({name, email, password, role}).into("cookenu_user")}