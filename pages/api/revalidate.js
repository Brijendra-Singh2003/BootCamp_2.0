export default function handler(req, res) {
    try{
        res.revalidate('/students/2022');
        res.revalidate('/students/2023');
        return res.json({revalidated: true});
    }
    catch(err) {
        res.send(err.message);
    }
};