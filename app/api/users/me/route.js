import { NextResponse } from "next/server";
// import DB_Connect from "@/lib/DB_Connect";
// // import { User } from "@/lib/model/User";

// // const { tokenData } = require("@/lib/helpers/tokenData");


export async function GET(req) {
    DB_Connect();

    try {
        console.log(req)
        const userid = await tokenData(req);
        console.log(userid);
        const user = await User.findOne({ _id: userid }).select('-password');

        user.isAdmin = true;
        console.log(user)
        return NextResponse.json({ message: "User Found!", result: user, success: true }, { status: 200 });
        
        // console.log(req);
        return NextResponse.json({ message: "User Found!", result: "user", success: true }, { status: 200 });
    } catch (err) {
        const data = { result: "Error occured", message: err.message, success: false };
        return NextResponse.json(data, { status: 500 });
    }
}