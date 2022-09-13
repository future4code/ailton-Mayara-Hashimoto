import { connection } from "../connect"

export class User {
    constructor (
        private id:string,
        private email:string,
        private password:string,
    ) { };

    public async getUser(id:string):Promise<any> {
        const result = await connection
                .select("*").from("User").where({ id })
            return result[0]
    }
}