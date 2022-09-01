import { connection } from "../connection"

export const getUsers = async (req:any, res:any) => {
    try {
       const recive = await connection.raw(`SELECT * FROM labecommerce_users`)
        res.status(201).send(recive[0]) 
    }
    catch (err:any) {
        res.status(404).send({message: err.message})
    }
    
}
