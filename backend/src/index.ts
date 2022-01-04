import express from 'express'
import { Interface } from 'readline';
const app = express()
const port = 5000

type Cat = {
  name:string,
  age: number,
}

const newCat:Cat = {
  name:'Dany the cxat',
  age:12
}

let test:string = "Hey from server using ts";

app.get('/', (_, res) => {
  res.status(200).send(newCat)
})  

app.listen(port, () => console.log(`Running on port ${port}`))