const express = require("express");
const validator = require("validator");
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT ||8000;

app.use(express.json());          //to use imcoming json data as object

//create a new students
app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body)
    user.save().then(() =>{
        res.status(201).send(user);
    }).catch((e) =>{
        res.status(400).send(e);
    })
    ;
    
})

app.listen(port, () => {
    console.log(`Connection is successfull at port: ${port} `);
})