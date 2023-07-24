import Image from 'next/image';
import { storage } from '@/Firebase';
import { ref, getDownloadURL } from 'firebase/storage'

export default async function StudentPage(props) {

    const studentsList = [];

    const response = await fetch(
        'https://cse-bootcamp-auth-default-rtdb.asia-southeast1.firebasedatabase.app/'+props.params.year+'.json',
        { next: { revalidate: 10 } }
    );

    const data = await response.json();

    for(const key in data) {
        const curr = data[key];
        const imgref = ref(storage, `images/${curr.id}`);
        let imgURL = false;
        try {imgURL = await getDownloadURL(imgref);}
        catch (err) {
            console.log(err);
        }
        studentsList.push({...curr, image: imgURL || null});
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
                    <li>{student.linkdin}</li>
                    <li>{student.github}</li>
                </ul>
            </div>
        })}
    </div>

}

// {"about":"my about is empty","github":"birju ka github","id":"041","instagram":"birju ka insta","linkdin":"birju ka linkdin","name":"birju"}