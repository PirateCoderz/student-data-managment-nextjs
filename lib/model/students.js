import mongoose from "mongoose";


const studentModel = new mongoose.Schema({
    firstName:{type:String, trim:true},
    lastName:{type:String, trim:true},
    age:{ type:Number, min:1, max:70},
    course:{type:String, trim:true, uppercase:true},
    semester:{type:String, trim:true},
    roll:{type:String, trim:true, trim:true},
    cgpa:{type:String, trim:true}
})

export const Student = mongoose.models.students || mongoose.model("students", studentModel);