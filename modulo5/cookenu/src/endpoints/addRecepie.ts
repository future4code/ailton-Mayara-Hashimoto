import { connection } from "../connect";
import { Recepie } from "../services/types";

export const createRecepie = async ( title:string, description:string) => { 
    await connection.insert({title, description}).into("cookenu_recepie") 
}