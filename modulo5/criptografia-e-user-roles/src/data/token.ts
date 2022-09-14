import * as jwt from "jsonwebtoken"

type AuthenticationData = {
    id: string;
    role:string
  }
export const expiresIn = "1min";
export const createToken = (input:AuthenticationData):string => {
    const token = jwt.sign(
        { id:input.id, role:input.role }, 
        process.env.JWT_KEY as string,
        { expiresIn }
    );
    return token;
}