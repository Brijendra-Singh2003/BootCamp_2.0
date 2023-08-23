import "./students.css"
import sampleData from './sampleData';
import { Drower } from '@/components/Drawrer/Drower';
import Retry from "@/components/Retry";

export const metadata = {
    title: "Students - CSE Bootcamp 2.0",
    description: "About your peers",
};

// const curr = {
//     _id: "64e1f12024452bbb960c865e",
//     id: "b122041",
//     name: "Brijendra Singh",
//     about: "",
//     state: "mp",
//     city: "pali",
//     instagram: "https://www.instagram.com/",
//     github: "https://github.com/",
//     linkedin: "https://www.linkedin.com/",
//     image: "https://firebasestorage.googleapis.com/v0/b/cse-bootcamp-auth.appspot.com/o/images%2Fb122041?alt=media&token=ddedfdf7-8c2a-4927-b945-ee1c003b1055",
//     year: 2,
//     __v: 0
// }

export default async function StudentPage({params:{year}}) {

    let studentsList = sampleData;

    try {
        const response = await fetch(`${process.env.HOST}/api/db/getall?year=${year[3]}`, {next: {revalidate: 60, tags:['student', year]}});
        studentsList = await response.json();
    } catch (error) {
        return <div className=" mt-52"><h1>Something went wrong{error.message}</h1><Retry tag={'student'}></Retry></div>
    }

    return (
        <Drower userlist={studentsList}/>
    )
}

export function generateStaticParams() {
    return [{year: '2022'}, {year: '2023'}];
}