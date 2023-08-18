import Image from 'next/image';
import { storage } from '@/Firebase';
import { ref, getDownloadURL } from 'firebase/storage'

export default async function StudentPage() {

    const response = await fetch('https://csebootcamp2.varcel.app/api/db/getall',{
        method: 'GET'
    })

    const studentsList = await response.json();
    const a = []

    for(let i=0; i<studentsList.length; i++) {
        const imgref = ref(storage, `images/${studentsList[i].id}`);
        let imgURL = false;
        try {imgURL = await getDownloadURL(imgref);}
        catch (err) {}
        studentsList[i] = {...studentsList[i], image: imgURL};
    }

    return <div>
        {studentsList.map( student => {
            return <div key={student.id}>
                <br />
                {student.image && <Image className="mx-auto my-4"  src={student.image} alt="image" height={150} width={150} />}
                <h1>{student.name}</h1>
                <p>{student.about}</p>
                <ul>
                    <li>{student.instagram}</li>
                    <li>{student.linkedin}</li>
                    <li>{student.github}</li>
                </ul>
            </div>
        })}
        {/* {JSON.stringify(data)} */}
    </div>

}

// {"about":"my about is empty","github":"birju ka github","id":"041","instagram":"birju ka insta","linkdin":"birju ka linkdin","name":"birju"}