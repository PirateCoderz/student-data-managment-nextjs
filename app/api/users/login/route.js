import { NextResponse } from "next/server";
import { User } from "@/lib/model/User";
import DB_Connect from "@/lib/DB_Connect";
import jwt from 'jsonwebtoken';

import bcryptjs from 'bcryptjs'
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";


export async function POST(req) {

    DB_Connect();
    try {
        const payload = await req.json();

        const { password, email } = payload;
        // console.log(payload);

        // check if user already exists or not
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "User Doesn't existed" }, { status: 500 });
        }
        
        //Check whether given Password is correct
        const validPass = await bcryptjs.compare(password, user.password);
        
        if(!validPass) {
            return NextResponse.json({ error: "Password is Incorrect" }, { status: 500 });
        }

        // Create User Token 

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        
        const token = await jwt.sign(tokenData, process.env.JWT_TOKEN, {expiresIn: '1h'});

        
        console.log(token)
        const response = NextResponse.json({message: "Login Successful", success: true} , {status: 200});

        response.cookies.set("token" , token, {
            httpOnly: true
        });

        return response;

    } catch (err) {
        const data = { result: err, message: err.message, success: false };
        return NextResponse.json(data, { status: 500 });
    }
}