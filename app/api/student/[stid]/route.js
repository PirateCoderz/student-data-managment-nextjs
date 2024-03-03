import DB_Connect from "@/lib/DB_Connect";
import { Student } from "@/lib/model/students";
import { NextResponse } from "next/server";

export async function PUT (req, content) {
    DB_Connect();

    const id = content.params.stid;
    const filter = {_id:id};
    // console.log(filter);
    const payload = await req.json();
    // console.log(payload);
    
    const result = await Student.findOneAndUpdate(filter, payload);

    return NextResponse.json({result, success:true}, {status:200})
}

export async function GET (req, content) {
    DB_Connect();
    // console.log(content);

    const id = content.params.stid;
    const record = {_id:id};
    
    const result = await Student.findById(record);

    return NextResponse.json({result, success:true}, {status:200})
}


export async function DELETE (req, content) {
    DB_Connect();

    const id = content.params.stid;
    const record = {_id:id};
    const result = await Student.deleteOne(record);

    return NextResponse.json({result, success:true} , {status:200});
}