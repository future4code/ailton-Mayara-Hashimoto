import express, { response } from "express";
import cors from "cors";
import { prodList, Product } from "./data"

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// Exercicio 1

app.get("/test", (req, res) => {
    res.send("Recieved")
})

// Por favor, olhar data.ts para verificar o exercício 2

// Exercício 3 se tornou exercicio 7

app.post("/addProduct", (req, res) => {
    try {
        const { name, price } = req.body
        if (typeof name !== "string") {
            res.statusCode = 401
            throw new Error("This is not a string, retry action")
        }
        if (!name) {
            res.statusCode = 404
            throw new Error("Name of the product is missing.")
        }
        if (typeof price !== "number") {
            res.statusCode = 401
            throw new Error("This is not a number, retry action")
        }
        if (!price) {
            res.statusCode = 404
            throw new Error("Price must be defined, please insert a value")
        }
        if (price <= 0) {
            res.statusCode = 404
            throw new Error("Product cannot recieve a value lower than 1, please retry")
        }
        const addProduct: Product = {
            name,
            price
        }
        prodList.push(addProduct)
        
        res.send(prodList)
    }

    catch (error: any){
        res.status(res.statusCode || 500).send({message: error.message})
    }

})

// Exercício 4

app.get("/getProducts", (req, res) => {
    res.send(prodList)
})

// Exercicio 5 virou 8

app.put("/editPrice/:id", (req, res) => {
    try {
        const edit = req.params.id
        const { price } = req.body
            if (typeof price !== "number") {
                res.statusCode = 401
                throw new Error("This is not a number, retry action")
            }
            if (!price) {
            res.statusCode = 404
            throw new Error("Product must have a value, please retry")
            }
            if (price <=0) {
            res.statusCode = 404
            throw new Error("Product cannot recieve a value lower than 1, please retry")
            }
            if (!edit||edit === ":id") {
            res.statusCode = 404
            throw new Error("Id not found, please retry")   
            }
            
            const getId = prodList.filter((product) => {
                return edit === product.id
            })
            if (!getId.length) {
            res.statusCode = 404
            throw new Error("Opsy, please retry")
            }
            const newPrice = req.body.price
            const editPrice = prodList.map((product) => {
                if (edit === product.id) return { ...product, price: newPrice}
                    return product
            })
            res.send(editPrice)

    } catch (error:any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
    
})

// Exercicio 6 virou 9

app.delete("/deleteProd/:id", (req, res) => {
    try {
        const delProd = req.params.id

        if (!delProd||delProd === ":id") {
            res.statusCode = 404
            throw new Error("Id not found, please retry")
        }

        const findId = prodList.filter((product) => {
            return delProd === product.id
        })
        if (!findId.length) {
            res.statusCode = 404
            throw new Error("Not found, please retry")
        }

        const newList: Product[] = prodList.filter((product) => {
            return product.id !== delProd
        })
        res.send(newList)
    } 
    catch (error:any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
})



