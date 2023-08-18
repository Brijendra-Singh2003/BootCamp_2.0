import Image from 'next/image';
import { storage } from '@/Firebase';
import { ref, getDownloadURL } from 'firebase/storage'
import classes from "../students.module.css"
import StudentCard from '@/components/studentCard/studentCard';

export default async function StudentPage() {

    const response = await fetch(`${process.env.HOST}/api/db/getall`,{
        method: 'GET'
    })

    const studentsList = await response.json();

    for(let i=0; i<studentsList.length; i++) {
        const imgref = ref(storage, `images/${studentsList[i].id}`);
        let imgURL = false;
        try {imgURL = await getDownloadURL(imgref);}
        catch (err) {}
        studentsList[i] = {...studentsList[i], image: imgURL};
    }

    return (
        <div className='flex flex-wrap gap-5'>
            {studentsList.map( student => {
                return <StudentCard {...student} />
            })}
        </div>
    )

}

// {"about":"my about is empty","github":"birju ka github","id":"041","instagram":"birju ka insta","linkdin":"birju ka linkdin","name":"birju"}