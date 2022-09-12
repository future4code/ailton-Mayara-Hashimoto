import { app } from "./app";
import { getData, createData } from "./data/data"

app.get("/:cep", getData)
app.post("/address", createData)