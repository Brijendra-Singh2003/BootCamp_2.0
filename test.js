const mongoose = require("mongoose");
const data = require("./data.json");

// const ImageSchema = new mongoose.Schema(
//     {
//         id: String,
//         image: String,
//         ext: String
//     }
// )

// const Image = mongoose.model('Image', ImageSchema);

// async function connection2() {
//     try {
//             await mongoose.connect("mongodb+srv://b122041:Ch7N70rfTvxtZfth@cluster0.bfd1oky.mongodb.net/test?retryWrites=true&w=majority");
//             console.log('connected to db');
//             data.forEach(async (element) => {
//                 if(element?.ext) {
//                     console.log(`${element.id} is updated`);
//                     const isPresent = await Image.findOneAndUpdate({ id: element.id }, {id: element.id, image: element.image, ext: element.ext});
//                     if(!isPresent) {
//                         Image.create({id: element.id, image: element.image, ext: element.ext}).then((data)=>{
//                             console.log(data);
//                         })
//                     }
//                 }
//             });
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// connection2();

const PostSchema = new mongoose.Schema({
    id: String,
    name: String,
    about: String,
    state: String,
    city: String,
    instagram: String,
    github: String,
    linkedin: String,
    year: Number,
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

async function connection1() {
    try {
        await mongoose.connect(
            "mongodb+srv://b122041:Ch7N70rfTvxtZfth@cluster0.bfd1oky.mongodb.net/test?retryWrites=true&w=majority"
        );
        console.log("connected to db");
        data.forEach(async ({id,name,about,state,city,imstagram,github,linkedin,year}) => {
                const post = await Post.create({id, name,about,state,city,imstagram,github,linkedin,year});
                await post.save();
                console.log(`${id} is updated`);
        });
    } catch (error) {
        console.log(error.message);
    }
}

connection1();
