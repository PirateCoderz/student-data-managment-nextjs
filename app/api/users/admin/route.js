import { NextResponse } from "next/server";
import DB_Connect from "@/lib/DB_Connect";
import { User } from "@/lib/model/User";
import tokenData  from "@/lib/helpers/tokenData";



export async function GET(req) {
    DB_Connect();

    try {
        const userid = await tokenData(req);

        const user = await User.findOne({ _id: userid }).select('-password');

        user.isAdmin = true;

        return NextResponse.json({ message: "User Found", result: user, success: true }, { status: 200 });

    } catch (err) {
        // const data = { result: err, message: err.message, success: false };
        return NextResponse.json({data: "admin api failed", success:true} , { status: 500 });
    }
}
