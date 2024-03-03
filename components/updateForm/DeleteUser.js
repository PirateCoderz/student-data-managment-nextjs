'use client'

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DeleteUser = ({id}) => {
    const router = useRouter();

    const deleteHandler = async () => {

        await axios.delete('/api/student/'+id)
        .then((result) => {
            alert('User Deleted');
            router.push('/browse-st');
        }).catch((err) => {
            alert('Error Occured while Deleting Student Data');
            console.log(err);
        });
        router.refresh();
    }

    return ( 
        <Link href={'#'} onClick={deleteHandler}>Delete</Link>
     );
}
 
export default DeleteUser;