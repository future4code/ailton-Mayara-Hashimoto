import { addPurchase } from "../data/data"
import { purchase } from "../types/types"

export async function createPurchase (req:any, res:any) {
    try {
        const id = req.body.id
        if (!id) {res.statusCode = 404 
                throw new Error ("id missing")}
        const user_id = req.body.user_id
        if (!user_id) {res.statusCode = 404 
            throw new Error ("user id missing")}
        const product_id = req.body.product_id
        if (!product_id) {res.statusCode = 404 
            throw new Error ("product id missing")}
        const quantity = req.body.quantity
        if (!quantity) {res.statusCode = 404 
            throw new Error ("quantity missing")}
        const total_price = req.body.total_price
        if (!total_price) {res.statusCode = 404 
            throw new Error ("total price will only show when quantity is selected")}
        const newPurchase:purchase = {
            id:id, user_id:user_id, product_id:product_id, quantity:quantity, total_price:total_price
        } 
        await addPurchase(newPurchase)
        res.status(201).send("Purchased!")
    }  
    catch (err:any) { res.status(404).send({message: err.message}) }
}