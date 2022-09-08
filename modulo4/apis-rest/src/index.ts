import express from "express";
import cors from "cors";
import { users, Infos } from "./data";

const app = express();
app.use(express.json());
app.use(cors());
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// Exercicio 1

app.get("/users", (req, res) => {
    res.send(users)
})

// Exercicio 2 encontra-se no arquivo de data.

// Exercicio 3

app.get("/users/:name", (req, res) => {
    try {
        const name = req.params.name
      
        if (!name || name !== ":name") {
            res.statusCode = 404
            throw new Error("User no found, try another name")
        }
        
        const search: Infos[] = users.filter((id) => {
            return id.name === name
        })
        res.send(search)
    } 
    catch (error: any){
        res.status(res.statusCode || 500).send({message: error.message})
    }
})

// Exercicio 4

app.post("/addUsers", (req, res) => {
    try {
        const { id, name, email, type, age } = req.body
        if (typeof id !== "number") {
            res.statusCode = 401
            throw new Error("This is not a number, retry action")
        } 
        if (!id) {
            res.statusCode = 404
            throw new Error("Id MUST be a number. Please try again.")
        }
        if (typeof name !== "string") {
            res.statusCode = 401
            throw new Error("This is not a string, retry action")
        }
        if (!name) {
            res.statusCode = 404
            throw new Error("Field MUST a value. Please insert an username")
        }
        if (typeof email !== "string") {
            res.statusCode = 401
            throw new Error("This is not a string, retry action")
        }
        if (!email) {
            res.statusCode = 404
            throw new Error("Email MUST be added. Please try again.")
        }
        if (typeof type !== "string") {
            res.statusCode = 401
            throw new Error("This is not a string, retry action")
        }
        if (!type) {
            res.statusCode = 404
            throw new Error("User must be marked as NORMAL or ADMIN.")
        }
        if (typeof age !== "number") {
            res.statusCode = 401
            throw new Error("This is not a number, retry action")
        }
        if (!age) {
            res.statusCode = 404
            throw new Error("User must inform age. Please, try again")
        }
        const newUser: Infos = {
            id, name, email, type, age
        }
        users.push(newUser)
        res.send(users)
    }
    catch (error: any){
        res.status(res.statusCode || 500).send({message: error.message})
    }
})

// Exercicio 5

app.put("/editUser/:id", (req, res) => {
    try {
    const userToEdit = req.params.id
    const { name, email, type, age } = req.body
    if (typeof name !== "string") {
        res.statusCode = 401
        throw new Error("This is not a string, retry action")
    }
    if (!name) {
        res.statusCode = 404
        throw new Error("Field MUST a value. Please insert an username")
    }
    if (typeof email !== "string") {
        res.statusCode = 401
        throw new Error("This is not a string, retry action")
    }
    if (!email) {
        res.statusCode = 404
        throw new Error("Email MUST be added. Please try again.")
    }
    if (typeof type !== "string") {
        res.statusCode = 401
        throw new Error("This is not a string, retry action")
    }
    if (!type) {
        res.statusCode = 404
        throw new Error("User must be marked as NORMAL or ADMIN.")
    }
    if (typeof age !== "number") {
        res.statusCode = 401
        throw new Error("This is not a number, retry action")
    }
    if (!age) {
        res.statusCode = 404
        throw new Error("User must inform age. Please, try again")
    }
    const edited = req.body
    const editedUser = users.map((user) => {
        if (userToEdit === user.id.toString()) return  { ...edited }
        return user
    })
    res.send(editedUser)
}
catch (error: any){
    res.status(res.statusCode || 500).send({message: error.message})
    }
})