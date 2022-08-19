
export type Money = {   
        value:number,
        date:string,  
        description:string 
}
export type Requested = {
    name:string,
    cpf:string,
    birth:string,
    balance: Money
}



export const users: Requested[] = [
    {
        name: "Hyunjin",
        cpf:"146.897.325-96",
        birth: "2000-03-20",
        balance: {
            value: 15000,
            date:"2022-08-01",
            description:"Total balance"
        }
    },
    {
        name: "Bang Chan",
        cpf:"137.899.855-96",
        birth: "1997-10-03",
        balance: {
            value: 20000,
            date:"2022-08-01",
            description:"Total balance"
        }
    },
    {
        name: "Lee Min Ho",
        cpf: "266.314.852-79",
        birth: "1998-10-25",
        balance: {
            value: 13000,
            date:"2022-08-01",
            description:"Total balance"
        }
    },
    {
        name: "Yong San",
        cpf: "282.419.632-79",
        birth: "1998-09-01",
        balance: {
            value: 1000,
            date:"2022-08-01",
            description:"Total balance"
        }
    },
    {
        name: "Lee Tae Kon",
        cpf: "369.258.147-36",
        birth: "1996-04-25",
        balance: {
            value: 2000,
            date:"2022-08-01",
            description:"Total balance"
        }
    }
]