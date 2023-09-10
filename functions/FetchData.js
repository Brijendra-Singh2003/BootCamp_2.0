"use server"
import connection from "@/utils/db"

export default async function fetchData() {
    await connection();
}