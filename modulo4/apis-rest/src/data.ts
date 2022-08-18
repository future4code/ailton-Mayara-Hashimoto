// Exercício 2

export type Infos = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


export let users: Infos[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    },
    {
        id: 7,
        name: "Hyunjin",
        email: "hyunnie@email.com",
        type: "NORMAL",
        age: 23
    },
    {
        id: 8,
        name: "Bang Chan",
        email: "christopher@email.com",
        type: "ADMIN",
        age: 26
    }
]