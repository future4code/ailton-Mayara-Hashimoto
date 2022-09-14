import { connection } from "../connection";
import { users, product, purchase } from "../types/types"

export async function addUser (user:users) {
    try {
        await connection().insert({
            id: Date.now().toString(), name: user.name, email: user.email, password: user.password
        }).into("labecommerce_users")
    }
    catch (err:any) { console.log(err) }
};

export async function addProduct (prod:product) {
    try {
        await connection().insert({
            id: Date.now().toString(), name: prod.name, price: prod.price, image_url: prod.image_url
        }).into("labecommerce_products")
    }
    catch (err:any) { console.log(err) }
};

export async function addPurchase (buy:purchase) {
    try {
        await connection().insert({
            id: Date.now().toString(), user_id: buy.user_id, product_id: buy.product_id, quantity: buy.quantity, total_price: buy.total_price
        }).into("labecommerce_purchases")
    }
    catch (err:any) { console.log(err) }
}