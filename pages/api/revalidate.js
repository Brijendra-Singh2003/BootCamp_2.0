export default async function handler(req, res) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(403).json({message: 'Invalid Token'});
    }

    await res.revalidate('/students/2022');
    await res.revalidate('/students/2023');

    return res.json({revalidate: true});
};