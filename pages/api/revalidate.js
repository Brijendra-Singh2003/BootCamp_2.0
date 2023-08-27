export default async function handler(req, res) {

    await res.revalidate('/students/2022');
    await res.revalidate('/students/2023');

    return res.json({revalidate: true});
};