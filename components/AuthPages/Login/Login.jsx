'use client';
import { useEffect, useState } from 'react';
import './login.css';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

const LoginPage = () => {
    const router = useRouter();

    const [btnDisabled, setBtnDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const onLogin = async () => {

        try {
            setLoading(true);
            const response = await axios.post('/api/users/login', user);
            if (response.data.success == true) {
                console.log("Login Success");
                toast.success("Login Success");
                router.push('/');
            }
        } catch (err) {
            console.error(err.response.data);
            toast.error(err.message);
            alert(err.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }, [user]);


    return (
        <div className="formMain">
            <p> Welcome! </p>
            <div id="formdiv" className="flex">
                <div className="form">

                    {/* <form className="form" onSubmit={(e) => {e.preventDefault(); console.log(user)}}> */}
                    {/* <input type="text" onChange={(e) => {setUser({...user, username: e.target.value})}} placeholder="Enter your Username" /> */}
                    <input type="email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} placeholder="Enter your email" />
                    <input type="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} placeholder="Enter your password" />
                    <button type="submit" className="signinbtn" onClick={onLogin} >{btnDisabled ? "No Login" : "Login"}</button>
                    {/* </form> */}
                </div>
            </div>
        </div>

    );
}

export default LoginPage;