const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api" , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("Connection is established....");
}).catch((e) => {
    console.log("No Conenction..");
    console.log(e);
})


