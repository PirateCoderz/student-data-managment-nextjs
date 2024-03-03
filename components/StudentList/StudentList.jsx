'use client';
import Link from 'next/link';
import style from './StudentList.module.css';
import DeleteUser from '../updateForm/DeleteUser';
import axios from 'axios';
import { useEffect, useState } from 'react';

const StudentList = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        StudentData();
    }, [])

    const StudentData = async () => {
        let newdata = await axios.get("/api/student");
        setData(newdata.data.result)
    }

    return (
        <div className={style.table_div}>
            <table className={style.table}>
                <thead>
                    <tr className={style.tr}>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Semester</th>
                        <th>Roll No</th>
                        <th>CGPA</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className={style.tbody}>
                    {data.map((a) => {
                        return (
                            <tr key={a.roll} className={style.tr}>
                                <td>{a.firstName + ' ' + a.lastName} </td>
                                <td>{a.age}</td>
                                <td className={style.uppercase}>{a.course}</td>
                                <td>{a.semester}</td>
                                <td className={style.uppercase}>{a.roll}</td>
                                <td>{a.cgpa}</td>
                                <td><Link href={`http://localhost:3000/update/${a._id}`} className={style.updateLink}>Update</Link></td>
                                <td><DeleteUser id={a._id} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;