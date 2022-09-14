import * as jwt from "jsonwebtoken"

type AuthenticationData = {
    id: string;
  }
export const expiresIn = "1min";
export const createToken = (input:AuthenticationData):string => {
    const token = jwt.sign(
        { id:input.id }, 
        process.env.JWT_KEY as string,
        { expiresIn }
    );
    return token;
}
