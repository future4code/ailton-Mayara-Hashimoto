import { connection } from "../connect"


export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

export const getAllUsers = async(req:any, res:any):Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){ res.statusCode = 404
          throw new Error("No users found") }
// Exercicio 1
          //a)
       let name = req.query.name
       const nameSearch = await connection.raw(`
       SELECT * FROM getAllUsers WHERE TITLE LIKE "%${name}%"
       `)
       if (!name) {
         name = ""
      };
          //b)
      let type = req.params.type
       const typeSearch = await connection.raw(`
       SELECT * FROM aula48_exercicio WHERE type = ${type}
       `)
       res.status(200).send(users)
// Exerciocio 2
   let order = req.query.order
      if (!name) { name = "" }
      if (!type) { type = "" }
      if (!order) { order = "asc" }
      let orderSearch = await connection.raw(`
            SELECT * FROM aula48_exercicio WHERE type = ${type}
            ORDER BY ${order}
      `)

// Exercicio 3
   let page = req.query.page
      const userPerPage = 2
      const userOffset = userPerPage * (Number(page) -1)
   let orderWithSet = await connection("aula48_exercicio")
                     .orderBy("type", `${orderSearch}`)
                     .limit(userPerPage)
                     .offset(userOffset)

// Exercicio 4
   

    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }