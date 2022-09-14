import { connection } from "../connect";

export const getUser = async (email:string):Promise<any> => {
    const result = await connection
            .select("*").from("cookenu_user").where({email})
        return result[0]
}