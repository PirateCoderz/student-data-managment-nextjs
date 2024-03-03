import { NextResponse } from "next/server";
import { Student } from "@/lib/model/students";
import DB_Connect from "@/lib/DB_Connect";

export async function GET (req) {
    DB_Connect();
    
    let data = [];
    try {
        data = await Student.find();
    } catch (err) {
        data = {result:err, success:false};
        return NextResponse.json(data, {status:404});
    }
    return NextResponse.json({result:data, success:true}, {status:200})
}

export async function POST(req) {

    DB_Connect();
    try {
        const payload = await req.json();
        // To Send data through POSTMAN through post request
        let student = new Student(payload);
        const data = await student.save();
        
    } catch (err) {
        const data = {result: err, success: false};
        return NextResponse.json(data, {status: 400});
    }
    return NextResponse.json({result: data , success: true}, {status: 200});
}