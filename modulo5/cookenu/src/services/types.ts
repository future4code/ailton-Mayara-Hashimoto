import { connection } from "../connect";

export class User {
    constructor (
        private id:string,
        private name:string,
        private email:string,
        private password:string,
        private role:string
    ) {};
    public async getUser(id:string):Promise<any> {
        const result = await connection
                       .select("*").from("cookenu_user").where({id})
                    return result[0]
    }
};

export class Recepie {
    constructor (
        private id:string,
        public title:string,
        public description:string
    ) {};
    public async getRecepie(id:string):Promise<any> {
        const result = await connection
                        .select("*").from("cookenu_recepie").where({id})
                    return result[0]
    }
}