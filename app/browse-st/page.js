import StudentList from "@/components/StudentList/StudentList";

import style from './browseStudents.module.css';

const BrowseStudents = () => {
    return (
        <div className={style.section}>
            <h1 className={style.heading}>All Students Data</h1>
            <StudentList />
        </div>
    );
};

export default BrowseStudents;