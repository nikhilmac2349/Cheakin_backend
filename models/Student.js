const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentId : String , 
    name : String , 
    program : String , 
    year : Number , 
    email : String , 
})

module.exports = mongoose.model("student" , studentSchema);