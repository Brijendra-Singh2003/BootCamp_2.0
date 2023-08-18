const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            unique: true,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        instagram: String,
        github: String,
        linkedin: String,
    }
)

const Post = mongoose.model('Post', PostSchema);

const newdata = {
    id:'b122010',
    name: 'skyy',
    desc: 'dummy description',
    location: 'jharkhand',
    instagram: 'offline'
}

async function foo() {

    await mongoose.connect('mongodb+srv://b122041:Ch7N70rfTvxtZfth@cluster0.bfd1oky.mongodb.net/test?retryWrites=true&w=majority');

    const isPresent = await Post.findOneAndUpdate({ id: newdata.id }, newdata);

    if (!isPresent) {
        const post = await Post.create(newdata);
        await post.save();
    }

    const data = await Post.find();
    console.log(data, isPresent);

    mongoose.connection.close();
}
// foo();

async function boo() {

    await mongoose.connect('mongodb+srv://b122041:Ch7N70rfTvxtZfth@cluster0.bfd1oky.mongodb.net/test?retryWrites=true&w=majority');

    // const isPresent = await Post.findOneAndUpdate({ id: newdata.id }, newdata);

    // if (!isPresent) {
    //     const post = await Post.create(newdata);
    //     await post.save();
    // }

    const data = await Post.findOne({id: newdata.id});
    console.log(data, typeof(data));

    mongoose.connection.close();
}
boo();