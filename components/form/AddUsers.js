"use client";

import { useState } from 'react';
import style from './users.module.css';
import formstyle from './forms.module.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AddUsers = () => {

    const router = useRouter();

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        course: '',
        semester: '',
        roll: '',
        cgpa: ''
    });


    const submitHandler = async (e) => {
        e.preventDefault();

        if (data.firstName == "" || data.lastName == "" || data.age == "" || data.course == "" || data.semester == "" || data.roll == "" || data.cgpa == "") {
            alert("Some Data Fields are Empty. Fill All of them...");
            return
        }

        let firstName = data.firstName, lastName = data.lastName,
            age = data.age, course = data.course.toUpperCase(), semester = data.semester,
            roll = data.roll.toUpperCase(), cgpa = data.cgpa;

        await axios.post("/api/student", {
            firstName, lastName, age, course, semester, roll, cgpa
        }
        ).then((result) => {
            console.log("Data is Sent")
            alert("New Student Added Successfully");
            router.replace('./browse-st');
        }).catch((err) => {
            console.log("Error Occured While sending data.")
            console.log(err);
        });

        // console.log(firstName, lastName, age, course, semester, roll, cgpa)
        router.refresh();

    }
    const clearHandler = () => {
        setData({
            firstName: '',
            lastName: '',
            age: '',
            course: '',
            semester: '',
            roll: '',
            cgpa: ''
        })
    }

    const changeData = (inputField, newVal) => {
        setData((preevData) => {
            return {
                ...preevData,
                [inputField]: newVal
            }
        })
    }


    return (
        <div className={style.main} >
            <h1 className={style.heading1}>Add Users</h1>

            <div className={formstyle.forms}>
                <form onSubmit={submitHandler} className={formstyle.newForm}>
                    <input type='text' placeholder='Enter First Name' onChange={(e) => changeData('firstName', e.target.value)} value={data.firstName} />
                    <input type='text' placeholder='Enter Last Name' onChange={(e) => changeData('lastName', e.target.value)} value={data.lastName} />
                    <input type='text' placeholder='Enter Age' onChange={(e) => changeData('age', e.target.value)} value={data.age} />
                    <input type='text' placeholder='Enter Class' onChange={(e) => changeData('course', e.target.value)} value={data.course} />
                    <input type='text' placeholder='Enter Semester' onChange={(e) => changeData('semester', e.target.value)} value={data.semester} />
                    <input type='text' placeholder='Enter Roll No' onChange={(e) => changeData('roll', e.target.value)} value={data.roll} />
                    <input type='text' placeholder='Enter CGPA' onChange={(e) => changeData('cgpa', e.target.value)} value={data.cgpa} />
                    <div className={formstyle.submitDiv}>
                        <button className={formstyle.submit}>Add User</button>
                        <input type='reset' className={formstyle.submit} onClick={clearHandler} value="Clear Data" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddUsers;