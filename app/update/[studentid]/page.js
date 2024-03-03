import UpdateUser from "@/components/updateForm/UpdateUser";

const UpdateStudentData = async ({ params }) => {
    
    const id = params.studentid;
    const filter = {_id:id};
    // console.log(id)

    return (
        <>
            <h1 style={{textAlign:"center", paddingBlock:10}}>Update Student Data</h1>

            <UpdateUser filter={filter} />

        </>
    );
}

export default UpdateStudentData;