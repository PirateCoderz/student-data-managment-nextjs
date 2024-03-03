"use client"

import './logoutbtn.css'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
    const router = useRouter();

    const logoutHandler = async () => {
        const res = await axios.get('/api/users/logout');
        console.log(res.data.success);

        router.push('/login');
    }
    return (
        <button  className='logoutbtn' onClick={logoutHandler}>Logout</button>
     );
}
 
export default LogoutBtn;