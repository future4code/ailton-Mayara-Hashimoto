import axios from "axios";
import { newAdd } from "./funtions";
import { Address } from "../enpoints/types";

export async function getData(cep:string) {
    try {
        const recive = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return recive.data
    }
    catch (err:any) {
        return null
    }
    
}

export async function createData(req:any, res:any) {
    try {
        const cep = req.params.CEP
        if (!cep) {
            res.status(404).send({message: "CEP not informed"})
        };
        const sendAddress = await getData(cep)
        if (!sendAddress) {
            res.status(404).send({message: "Something is missing"})
        }
        const sendData:Address = {
            CEP: sendAddress.cep,
            Number: sendAddress.numero,
            Complement: sendAddress.complemento
        }
        await newAdd(sendData)
        res.status(201).send("User added.")
    }
    catch (err:any) {
        res.status(404).send({message: err.message})
    }
}

