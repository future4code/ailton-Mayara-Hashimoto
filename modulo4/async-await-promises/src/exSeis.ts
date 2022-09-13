import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import { user } from "./exTres"

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

// Exercicio Seis
// a)
//  Promete que todas as funções serão executadas
// b)
//  É receber uma exceção mais cedo se alguma promise falhar, além de esperar no máximo o tempo da promise mais demorada dentro de doubles
// c)
const notify = async (users:user[], message:string):Promise<void> => {
   try {
      const notification = users.map(user => {
         return axios.post(`${baseUrl}/notifications`, {
            subscriberId: user.id, message: message
         })
      })
      await Promise.all(notification)
   }
   catch {
      console.log("Error")
   }
};