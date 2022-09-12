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

// Exercicio Um

// a)
//  Você deve utilizar uma função de get para retornar todos os itens de um array
// b)
//  utilixando a promessa de retorno <any[]>
// c)

async function getSubs():Promise<any[]> {
    const res = await axios.get(`${baseUrl}/subscribers`);
    return res.data;
};

app.get("/subscribers", async (req, res) => {
    try {
       await getSubs()
       res.status(200).send(getSubs)
    }
    catch {
       res.status(404).send({message: "Something went wrong"})
    }
 })