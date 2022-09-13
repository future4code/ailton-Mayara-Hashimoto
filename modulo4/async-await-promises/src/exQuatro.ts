import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import axios from "axios";
import { baseUrl } from "./baseUrl"

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

// Exercicio Cinco
// a)
//  Esta seria uma função tipo post/put
// b)
async function createNews( title: string, content: string, date: number ):Promise<void> {
   await axios.put(`${baseUrl}/news`, { title: title, content: content, date: date});
 };

 app.put("/newpost", async (req, res) => {
   try {
      await createNews(req.body.title, req.body.content, req.body.date);
      res.status(201).send({message: "post added"})
   }
   catch {
      res.status(404).send({message: "something went wrong"})
   }
 });
