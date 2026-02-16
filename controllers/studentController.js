const student = require("../models/Student") ; 



exports.getAllStudent = async(req , res)=>{
    const dddataa = await student.find();
    res.json(dddataa);
}


exports.addStudnet = async(req , res)=>{
    const user = await student.create(req.body);
    res.json(user);
}

exports.getStudentbyid = async(req , res)=>{
    const updatedStudent = await student.findByIdAndUpdate(
        req.params.id ,
        req.body,
        {new : true }
    );
    res.json(updatedStudent);
}


