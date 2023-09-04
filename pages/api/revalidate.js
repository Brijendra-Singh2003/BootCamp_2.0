export default async function handler(req, res) {
    try{
        await res.revalidate('/students/2022');
        await res.revalidate('/students/2023');
        return res.json({revalidate: true});
    }
    catch(err) {
        res.send(err.message);
    }
};