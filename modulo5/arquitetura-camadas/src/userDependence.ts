import { UserBusiness } from "./business/UserBusiness";
import { UserController } from "./controller/UserController";
import { UserDatabase } from "./database/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";

export const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new Authenticator(),
        new HashManager(),
        new IdGenerator()
    )
)