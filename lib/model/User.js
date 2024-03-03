import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{type:String, require:[true, "Please Provide username"]},
    email:{type:String, trim:true, require:[true, "Please Provide email"], unique: true},
    password:{ type:String, require:[true, "Please Provide password"]},
    isVerified: {type: Boolean, default: false},
    isAdmin: {type: Boolean, default: false},
    forgotPasswordToken: {type: String},
    forgotPasswordExpiry: {type: Date},
    verifyToken: {type: String},
    verifyTokenExpiry: {type: Date}

})

export const User = mongoose.models.users || mongoose.model("users", userSchema);