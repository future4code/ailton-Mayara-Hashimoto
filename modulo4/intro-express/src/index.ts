// Exercicio 1
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/message", (req, res) => {          
    res.send("Hello from Express")
});

//Exercicio 2

type Info = {
    id:string,
    name:string,
    phone:number,
    email:string,
    website:string
};

// Exercicio 3
const users:Info[] = [
    {
        id:"001",
        name:"Hyunjin",
        phone:366891456,
        email:"hyunnie@gmail.com",
        website:"https://jyp.com"
    },
    {
        id:"002",
        name:"Bang Chan",
        phone:154510321,
        email:"chan.hyung@gmail.com",
        website:"https://jyp.com"
    },
    {
        id:"003",
        name:"Lee Know",
        phone:3663243456,
        email:"leeknow@gmail.com",
        website:"https://jyp.com"
    },
    {   
        id:"004",
        name:"Yong San",
        phone:36455451456,
        email:"knvknvg@gmail.com",
        website:"https://instagram.com"
    },
    {   
        id:"005",
        name:"Delete Este usuario",
        phone:361456,
        email:"lolol@gmail.com",
        website:"https://instagram.com"
    }
]

// Exercicio 4

app.get("/getUsers", (req, res) => {
    res.send(users)
})

// Exercicio 5

type Posts = {
    id:string,
    title:string,
    body:string,
    userId:string
};

//Exercício 6

const post:Posts[] = [
    {
        id:"P001",
        title:"I Know, We Know, Lee Know",
        body:"Just want to make it clear, I know everything",
        userId:"003",
    },
    {
        id:"P002",
        title:"Beach, I'm at SurfyBeach",
        body:"Just got here, join me!",
        userId:"004",
    },
    {
        id:"P003",
        title:"Hyunjin has been working...",
        body:"Really hard, and he might be the first member to release a solo album. He really is working on music!",
        userId:"002",
    },
    {
        id:"P004",
        title:"Chan hyung... ",
        body:"Spoiled everything. But I'm sure stays will be happy! #loveStay",
        userId:"001",
    },
    {
        id:"P005",
        title:"Deletable Post",
        body:"Delete this post here.",
        userId:"005",
    },
];
    // Preferi criar fora do array de usuarios pra ficar mais fácil a minha compreensão neste momento.

// Exercicio 7

app.get("/getPosts", (req, res) => {
    res.send(post)
})

// Exercicio 8

app.get("/getPosts/:userId", (req, res) => {
    const userId = req.params.userId

    const userPost: Posts[] = post.filter((post) => {
        return post.userId.includes(userId)
    })
    res.send(userPost)
})

// Exercicio 9

app.delete("/deletePost/:userId", (req, res) => {
    const userId = req.params.userId

    const delPost: Posts[] = post.filter((post) => {
        return post.userId !== userId
    })
    res.send(delPost)
})

// Exercicio 10

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id

    const delUser: Info[] = users.filter((users) => {
        return users.id !== id
    })
    res.send(delUser)
})