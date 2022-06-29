const express = require("express");
const router = new express.Router();
const Student = require("../models/students");
// router.get("/School", (req, res) =>{                         // ----------Defing a router
//     res.send("hello Guys, this is school")
// })


//create a new students--------------promise
router.post("/students", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body)
    user.save().then(() =>{
        res.status(201).send(user);
    }).catch((e) =>{
        res.status(400).send(e);
    })
    ;
    
})

//create a new students--------------async-await
router.post("/students", async(req, res) => {
    
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }  
});


//read data of students
router.get("/students", async(req, res) =>{

    try{
        const readStudentsData = await Student.find();
        res.send(readStudentsData);

    }catch(e){
        res.send(e);
    }

});

//API for reading data for single student BY ID
router.get("/students/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
       const readDataForSingleStudent = await Student.findById(_id);
       res.send(readDataForSingleStudent);
    }catch(e){
        res.send(e);
    }
});


//API for reading data for single student BY NAME
router.get("/students/:name", async(req, res) =>{
    try{
        const _name = req.params.name;
       const readDataForSingleStudent = await Student.findById(_name);
       res.send(readDataForSingleStudent);
    }catch(e){
        res.send(e);
    }
});

//update the students by id

router.patch("/students/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const updateStudentById = await Student.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(updateStudentById);
    }catch(e){
        res.status(400).send(e);
    }
})

//delete collection or record by id

router.delete("/students/:id", async(req,res) =>{
    try{
        const _id = req.params.id;
        const deleteStudentRecord = await Student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(400).send();
        }
        res.send(deleteStudentRecord);
    }catch(e){
        res.status(500).send(e);
    }
})  


module.exports = router;