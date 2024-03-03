import { NextResponse } from "next/server";
import { User } from "@/lib/model/User";
import DB_Connect from "@/lib/DB_Connect";

import bcryptjs from 'bcryptjs'

export async function GET(req) {
    DB_Connect();

    let data = [];
    try {
        data = await Student.find();
    } catch (err) {
        data = { result: err, success: false };
        return NextResponse.json(data, { status: 404 });
    }
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}

export async function POST(req) {

    DB_Connect();
    try {
        const payload = await req.json();

        const { username, password, email } = payload;

        // check if user already exists or not
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User already existed" }, { status: 400 });
        }

        //Hash Password

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashPassword
        });
        const savedUser = await newUser.save();
        // console.log(savedUser)
        return NextResponse.json({result: savedUser, message: "User Created Successfully", success: true }, { status: 200 });
    } catch (err) {
        const data = { result: err, success: false };
        return NextResponse.json(data, { status: 500 });
    }
}