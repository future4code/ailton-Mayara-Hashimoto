import express, { Express } from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import knex from "knex";
import { AddressInfo } from "net";
import { creates } from "./types"


dotenv.config();
export const connection = knex({
   client: "mysql",
   connection: {
      host: "35.226.146.116",
      port: 3306,
      user: "ailton-mayara-hashimoto",
      password: "cllrixU78?r~JWzdX7m?",
      database: "ailton-mayara-hashimoto"
   }
});

const app: Express = express();
   app.use(express.json());
   app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

   // Exercício 1
      // a) o metodo raw retorna o id buscado, caso exista, caso não, retornará um erro.

      // b)
const getActor = async (id:string):Promise<any> => {
   const result = await connection.raw(`SELECT * FROM Actor WHERE id = "${id}"`)
   return result[0][0]
};
       // c)
const genderCounter = async (gender:string):Promise<any> => {
   const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
   `);
   const counter = result[0][0].count;
   return counter;
};

   // Exercício 2
const create = async (
  id: string,
  name: string,
  salary: number,
  birth_date: Date,
  gender: string
):Promise<void> => {
   await connection .insert({
      id:id, name:name, salary:salary, birth_date: birth_date, gender:gender 
   }).into("Actor")
}
      // a)
const updateSalary = async (id:string, salary:number):Promise<any> => {
   await connection("Actor").update ({ salary:salary }).where("id", id);
};
      // b)
const delActor = async (id:string):Promise<void> => {
   await connection("Actor").delete().where("id", id)
};
      // c)
const medSalary = async (gender:string): Promise<any> => {
   const result = await connection("Actor").avg("salary as average").where({gender})
   return result[0].average;
};

   // Exercício 3
      // a)
app.get("/actor/:id", async (req, res) => {
   try {
      const id = req.params.id
      const actor = await getActor(id);
      res.status(200).send(actor)
   } catch (err:any) {
      res.status(400).send({ message: err.message})
   }
});
      // b)
app.get("/actor", async (req, res) => {
   try {
      const counter = await genderCounter(req.query.gender as string);
      res.status(200).send({qantity:counter});
   } catch (err:any) {
      res.status(400).send({ message: err.message});
   }
});

   // Exercício 4
app.post("/actor", async (req, res) => {
   try {
      await create(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.birth_date),
      req.body.gender);
      res.status(200).send({message: "Actor added!"});
   }
   catch (err:any) {
      res.status(400).send({ message: err.message })
   }
});
      // a)
app.put("/actor", async (req, res) => {
   try {
      await updateSalary( req.body.id, req.body.salary);
      res.status(200).send({ message: "Salary updated"})
   }
   catch (err:any) {
      res.status(400).send({ message: err.message})
   }
});
      // b)
app.delete("/actor/:id", async (req, res) => {
   try {
      await delActor( req.params.id);
   }
   catch (err:any) {
      res.status(400).send({ message: err.message})
   }
});

   // Exercício 5 

   const addMovie = async (
      id:string,
      name:string,
      synopisis:string,
      release_date: Date,
      ranting:number,
      playing_limit_date: Date
   ) => { await connection 
      .insert({ 
         id:id,
         name:name,
         synopisis:synopisis,
         release_date: release_date,
         ranting:ranting,
         playing_limit_date:playing_limit_date
      }).into("Movies");
   };

app.post("/movies", async (req, res) => {
   try {
      await addMovie(
        req.body.id,
        req.body.name,
        req.body.synopisis,
        req.body.release_date,
        req.body.ranting,
        req.body.playing_limit_date 
      );
      res.status(200).send({ message: "Movie added" })
   }
   catch (err:any){
      res.status(400).send({ message: err.message})
   }
});

   // Exercício 6
