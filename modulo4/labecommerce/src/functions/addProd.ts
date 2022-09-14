import { addProduct } from "../data/data"
import { product } from "../types/types"

export async function createProduct (req:any, res:any) {
    try {
        const id = req.body.id
        if (!id) {res.statusCode = 404 
            throw new Error ("id missing")}
        const name = req.body.name
        if (!name) {res.statusCode = 404 
            throw new Error ("name missing")}
        const price = req.body.price
        if (!price) {res.statusCode = 404 
            throw new Error ("price missing")}
        const image_url = req.body.image_url
        if (!image_url) {res.statusCode = 404 
            throw new Error ("product must have an image")}
        const newProduct:product = {
            id:id, name:name, price:price, image_url:image_url
        } 
        await addProduct(newProduct)
        res.status(201).send("Product added!")
    }  
    catch (err:any) { res.status(404).send({message: err.message}) }
}