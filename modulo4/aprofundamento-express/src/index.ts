import express from "express";
import { AddressInfo } from "net";
import cors from "cors";

const app = express();
  app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

// Exercício 1

app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

// Exercício 2

type List = {
  id:number,
  user:string,
  task:string,
  completed:boolean
}

// Exercicio 3

const task:List[] = [
  {
    id: 1,
    user: "Hyunjin",
    task: "paint for and with stay #loveStay",
    completed: true
  },
  {
    id: 2,
    user: "Bang Chan",
    task: "finish new song for the next skz comeback",
    completed: false
  },
  {
    id: 3,
    user: "Yong San",
    task: "stop by agency to check new model gigs",
    completed: true
  },
  {
    id: 5,
    user: "Han JiSung",
    task: "Help Chan hyung with the new song",
    completed: false
  },
  {
    id: 6,
    user: "May",
    task: "finish with project of the day",
    completed: true
  },
  {
    id: 6,
    user: "May",
    task: "sleep all day",
    completed: false
  }
]

// Exercicio  =>  Por que sim

app.get("/getTasks", (req, res) => {
  res.send(task)
})

// Exercicio 4

app.get("/getTasks/:task", (req, res) => {
  const taskList = req.params.task
  const userTask: List[] = task.filter((task) => {
    return task.completed.toString() === taskList
  })
  res.send(userTask)
})

// Exercício 5

app.post("/postTask/:postTask", (req, res) => {
  const addTask = req.body
  task.push(addTask)

    res.send(task)
})

// Exercicio 6

app.put("/editTask/:taskId", (req, res) => {
  const edit = req.params.taskId
  const editStatus = task.map((task) => {
    if (task.id.toString() === edit) return { ...task, completed: !task.completed }
    return task
  })
     res.send(editStatus)
})

// Exercicio 7

app.delete("/deleteTask/:id", (req, res) => {
  const delTask = req.params.id
  const newList: List[] = task.filter((task) => {
    return task.id.toString() !== delTask
  })
  res.send(newList)
})

// Exercicio 8

app.get("/getTask/:userList", (req, res) => {
  const userList = req.params.userList
  const getTask: List[] = task.filter((task) => {
    return task.user === userList
  })
  res.send(getTask)
})

// Exercicio 9
      // Por favor, verificar o arquivo postman