import express from 'express'
const app = express();
const port = 5000;

const catRouts = require('./routs/cat');

type Cat = {
  name:string,
  age: number,
}

const newCat:Cat = {
  name:'Dany the cxat',
  age:12
}

app.use(catRouts);

app.use("/",(req, res, next) => {
  res.status(404).send('Page not found this is message from server');
});

app.listen(port, () => console.log(`Running on port ${port}`))