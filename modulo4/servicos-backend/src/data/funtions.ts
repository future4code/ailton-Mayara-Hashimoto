import { connection } from "../connect"
import { Address } from "../enpoints/types"

export async function newAdd (add:Address) {
    try {   await connection().insert({
            CEP:add.CEP,
            Number:add.Number,
            Complement:add.Complement }).into("Address")
    }
    catch (err:any) { console.log(err) }
}

