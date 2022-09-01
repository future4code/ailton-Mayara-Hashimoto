import { app } from "./app";
import { createUser } from "./functions/addUser"
import { createProduct } from "./functions/addProd"
import { createPurchase } from "./functions/addPurchase"
import { getUsers } from "./functions/getUser"
import { getProducts } from "./functions/getPord"
import { getPurchases } from "./functions/getPurchase"

app.post("/create-users", createUser)
app.post("/create-product", createProduct)
app.post("/create-purchase", createPurchase)
app.get("/users", getUsers)
app.get("/products", getProducts)
app.get("/purchases", getPurchases)

