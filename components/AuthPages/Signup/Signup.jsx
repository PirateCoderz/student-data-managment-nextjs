'use client';
import { useEffect, useState } from 'react';
import './signup.css';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

const Signup = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        username : "",
        email : "",
        password : ""
    });

    const onSignup = async () => {

        try {
            setLoading(true);
            const response = await axios.post('/api/users/signup', user);
            console.log(response.data);

            router.push('/login');
            
        } catch (err) {
            console.error(err.response.data.error);
            alert(err.response.data.error);
            toast.error(err.message);

        } finally {
            setLoading(false);

        }
    }

    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => {
        if(user.username.length > 0 && user.email.length > 0 && user.password.length > 0) {
            setBtnDisabled(false);
        }
    }, [user]);


    return (
        <div className="formMain">
            <p> Welcome! </p>
            <div id="formdiv"  className="flex">
                <div className="form">

                {/* <form className="form" onSubmit={(e) => {e.preventDefault(); console.log(user)}}> */}
                    <input type="text" onChange={(e) => {setUser({...user, username: e.target.value})}} placeholder="Enter your Username" />
                    <input type="email" onChange={(e) => {setUser({...user, email: e.target.value})}}  placeholder="Enter your email" />
                    <input type="password" onChange={(e) => {setUser({...user, password: e.target.value})}}  placeholder="Enter your password" />
                    <button type="submit" className="signinbtn" onClick={onSignup} >{btnDisabled ? "No Signup" : "Signup"}</button>
                {/* </form> */}
                </div>
            </div>
        </div>

    );
}

export default Signup;