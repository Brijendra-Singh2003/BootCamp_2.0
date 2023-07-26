"use server"

export default async function fetchData(user, data) {
    fetch(`https://cse-bootcamp-auth-default-rtdb.asia-southeast1.firebasedatabase.app/20${user.substring(2, 4)}/${user}.json`, {
        method: 'PUT',
        headers: { 'Contenet-Type': 'application/json' },
        body: JSON.stringify(data)
    })
}