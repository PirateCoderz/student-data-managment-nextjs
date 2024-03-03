"use client";

import { useEffect, useState } from 'react';
import style from './users.module.css';
import formstyle from './forms.module.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const UpdateUser = ({ filter }) => {
    const router = useRouter();

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        course: '',
        semester: '',
        roll: '',
        cgpa: ''
    })

    useEffect(() => {
        getStudentData();
    }, []);

    const getStudentData = async () => {
        await axios.get("/api/student/" + filter._id).then((response) => {
            let result = response.data.result;
            setData({
                firstName: result.firstName,
                lastName: result.lastName,
                age: result.age,
                course: result.course,
                semester: result.semester,
                roll: result.roll,
                cgpa: result.cgpa
            })
        }).catch((err) => {
            console.log("Error occured while fetching");
            console.log(err);
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        let firstName = data.firstName,
            lastName = data.lastName,
            age = data.age,
            course = data.course,
            semester = data.semester,
            roll = data.roll,
            cgpa = data.cgpa;

        await axios.put(`/api/student/${filter._id}`,
            { firstName, lastName, age, course, semester, roll, cgpa }).then((result) => {
                alert('Student Data is Updated');
                router.replace('/browse-st');
            }).catch((err) => {
                alert('Error Occured While Updating Data');
                console.log(err);
            });
        router.refresh();
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
                        <button className={formstyle.submit}>Update User</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;