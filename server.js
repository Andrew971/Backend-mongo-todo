const express = require('express')
const app = express()
const Todo = require('./Routes/todo')
const Home = require('./Routes/home')
const bodyParser = require('body-parser')
require('./Init/databaseNoSql')
const port = process.env.PORT|| 8080

app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
  });

app.use('/todo', Todo)
app.use('/', Home)

app.listen(port, (req, res) => {
  console.log('I am running on 8080')
})

module.exports = app

