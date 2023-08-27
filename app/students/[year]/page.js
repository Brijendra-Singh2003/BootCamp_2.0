import "./students.css";
// import sampleData from './sampleData';
import { Drower } from "@/components/Drawrer/Drower";

export const metadata = {
    title: "Students - CSE Bootcamp 2.0",
    description: "About your peers",
};

export default async function StudentPage({ params: { year } }) {
    let studentsList = [];

    try {
        const intYear = Number.parseInt(year[3]);
        const response = await fetch(process.env.HOST + "/api/db");
        try {
            studentsList = (await response.json())?.filter(
                (a) => a.year === intYear
            );
        } catch (err) {
            throw new Error(response.status);
        }
    } catch (error) {
        return (
            <div className=" mt-52">
                <h1>Something went wrong. Status:{error.message}</h1>
            </div>
        );
    }

    return (
        <Drower
            userlist={studentsList?.sort((a, b) => a.id.localeCompare(b.id))}
        />
    );
}



export async function generateStaticParams() {
    return [{ year: "2022" }, { year: "2023" }];
}