import express from "express";
import cors from "cors";
import { users, Money, Requested } from "./data"
import { type } from "os";

const app = express();

app.use(express.json());
app.use(cors());
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

function validation (cpf:string):boolean {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
        if (!cpf || cpf.length != 11 || 
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999" ) {
                return false
            } 
let sum = 0 
let res
    for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(cpf[i - 1]) * (11 - i)
    res = (sum * 10) % 11
if ((res == 10) || (res == 11)) res = 0
if (res != parseInt(cpf[9])) return false
    sum = 0
    for (let i = 1; i <= 10; i++) 
    sum = sum + parseInt(cpf [i - 1]) * (12 - 1)
    res = (sum * 10) % 11
if ((res == 10) || (res == 11)) res = 0
if (res != parseInt(cpf[10])) return false
return true

}

function checkAge(date:string, birth:string) {
    
    let currentAge:number = Math.abs( new Date(date).getFullYear() - new Date(birth).getFullYear() )
        if (currentAge <= 20) {
            return false
        }
        return true
}

app.post("/newUsers", (req, res) => {
    try {
        const { name, cpf, birth, balance } = req.body
        const checkIfAllowed = checkAge(balance.date, birth)
        if (checkIfAllowed === false) {
            res.statusCode = 401
            throw new Error("Our clients must be 20 or over, to create an account with us. Please comeback when you reach this age.")
        }
        if (validation(cpf) === false) {
            res.statusCode = 401
            throw new Error("This is not a valid CPF")
        }
        if (typeof name !== "string") {
            res.statusCode = 401
            throw new Error("Please, user must be a string")
        }
        if (!name) {
            res.statusCode = 404
            throw new Error("User must have a name")
        }
        if (typeof cpf !== "string") {
            res.statusCode = 401
            throw new Error("Cpf must be a number")
        }
        if (!cpf) {
            res.statusCode = 404
            throw new Error("Cpf must contain 11 numbers (only)")
        }
        if (typeof birth !== "string") {
            res.statusCode = 401
            throw new Error("Birth must be in the AAAAMMDD format")
        }
        if (!birth) {
            res.statusCode = 404
            throw new Error("Birth must be in the AAAAMMDD format")
        }
        if (!balance) {
            res.statusCode = 404
            throw new Error("Balance start at 0")
        }
        const newUser:Requested = {
            name, cpf, birth, balance
        }
        users.push(newUser)
        res.send(users)
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
})

app.get("/allUsers", (req, res) => {
    res.send(users)
})

app.get("/getUser/:cpf", (req, res) => {
    try {
        const getUser = req.params.cpf
        if (!getUser || getUser === ":cpf") {
            res.statusCode = 404
            throw new Error("CPF Not found")
        }
        const search:Requested[] = users.filter((id) => {
            return id.cpf === getUser
        })
        res.send(search)
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
})