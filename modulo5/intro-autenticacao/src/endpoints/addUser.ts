import { connection } from '../connect'
import { User } from '../types'

export const createUser = async (
    id:string, email:string, password:string ) => {
    await connection.insert({id, email, password}).into("User")
}