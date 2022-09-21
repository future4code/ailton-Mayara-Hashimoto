
import { pingRouter } from './router/pingRouter'
import { userRouter } from './router/userRouter'
import { app } from './app'


app.use("/ping", pingRouter)
app.use("/users", userRouter)