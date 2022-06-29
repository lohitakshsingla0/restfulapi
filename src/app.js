const express = require("express");
const validator = require("validator");
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT ||8000;
const studentRouter = require("./routers/student");

app.use(express.json());          //to use imcoming json data as object

//Creating a new router
// const router = new express.Router();                         // ----------creating
// router.get("/School", (req, res) =>{                         // ----------Defing a router
//     res.send("hello Guys, this is school")
// })

app.use(studentRouter);                                             // ----------register

app.listen(port, () => {
    console.log(`Connection is successfull at port: ${port} `);
})
