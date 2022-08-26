import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";


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

const createUser = async (
    id:string,
    name:string,
    nickname:string,
    email:string
):Promise<void> => {
    await connection.insert ({
        id:id, name:name, nickname:nickname, email:email
    }).into("Users")
};

app.post("/user", async (req, res) => {
    try {
        await createUser( req.body.id, req.body.name, 
                          req.body.nickname, req.body.email);
                res.status(201).send({ message: "User added correctly."})
    }
    catch (err:any) {
                res.status(404).send({ message: err.message})
    }
});

const getUser = async (id:string):Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Users WHERE id = ${id}`)
        return result[0][0]
};

app.get("/user/:id", async (req, res) => {
    try {
        const user_id = req.params.id
        const user = await getUser(user_id);
        res.status(201).send(user)
    }
    catch (err:any){
        res.status(404).send({ message: err.message})
    }
});

const editUser = async (id:string, name:string, nickname:string):Promise<any> => {
    await connection("Users").update({name:name, nickbname:nickname}).where("id", id)
};

app.put("/user/edit/:id", async (req, res) => {
    try {
        await editUser(req.body.id, req.body.name, req.body.nickbname);
        res.status(201).send({ message: "User updated! "})
    }
    catch (err:any) {
        res.status(404).send({ message: err.message })
    }
});

const createTask = async (
    id:string,
    title:string,
    description:string,
    limitDate:string,
    status:string
):Promise<void> => {
    await connection.insert({
        id:id, title:title, description:description, limitDate:limitDate, status:status
    }).into("Tasks")
};

app.post("/tasks", async (req, res) => {
    try {
        await createTask(
            req.body.id,
            req.body.title,
            req.body.description,
            req.body.limitDate,
            req.body.status
        );
        res.status(201).send({ message:"Task added."})
    }
    catch (err:any) {
        res.status(404).send({ message: err.message})
    }
});

const getTask = async (id:string):Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Tasks WHERE id = ${id}`)
        return result[0][0]
};

app.get("/task/:id", async (req, res) => {
    try {
        const task_id = req.params.id
        const task = await getTask(task_id);
        res.status(201).send(task)
    }
    catch (err:any){
        res.status(404).send({ message: err.message})
    }
});

const allUsers = async () => {
    const result = await connection
      .select("*")
      .from("Users");
    return result[0];
  };

app.get("/user/all", async (req, res) => {
    try {
        const users = await allUsers();
        res.status(200).send({ users: users})
    }
    catch (err:any){
        res.status(404).send({ message: err.message})
    }
});

const delTask = async (id:string):Promise<void> =>{
    await connection("Tasks").delete().where("id", id)
};

app.delete("/task/:id", async (req, res) =>{
    try {
        await delTask(req.params.id)
        res.status(201).send({message: "Task deleted"})
    }
    catch (err:any) {
        res.status(401).send({message: err.message})
    }
});

const delUser = async (id:string):Promise<void> =>{
    await connection("Users").delete().where("id", id)
};

app.delete("/user/:id", async (req, res) =>{
    try {
        await delUser(req.params.id)
        res.status(201).send({message: "User deleted"})
    }
    catch (err:any) {
        res.status(401).send({message: err.message})
    }
});