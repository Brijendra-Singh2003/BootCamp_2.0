import mongoose, { Schema, model } from 'mongoose'

const PostSchema = new Schema(
    {
        id: String,
        name: String,
        about: String,
        state: String,
        city: String,
        instagram: String,
        github: String,
        linkedin: String,
        year: Number,
    }
)

const Post = mongoose.models.Post || model('Post', PostSchema);

export default Post;