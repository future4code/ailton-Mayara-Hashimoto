export class PingBusiness {
    public ping = async () => {
        const response = {
            message: "Pong!"
        }
        
        return response
    }
}

const toUpperCase = (str: string): string => {
	return str.toUpperCase()
}

const toSplit = (str: string): string[] => {
	return str.split("")
}