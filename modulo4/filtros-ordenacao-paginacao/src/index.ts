import { app } from "./app";
import { getAllUsers } from "./endpoints/endpoint";

app.get("/users", getAllUsers)
