import * as bcrypt from 'bcryptjs'

export const hash = async (s:string):Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const restult = await bcrypt.hash(s,salt)
    return restult
}

export const comapre =  async(s:string, hash:string):Promise<boolean> => {
    return bcrypt.compare(s, hash)
}