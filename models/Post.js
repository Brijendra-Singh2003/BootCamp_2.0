import mongoose, { Schema, model } from 'mongoose'

const PostSchema = new Schema(
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
        about: {
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
    },
    { timestamps : true }
)

const Post = mongoose.models.Post || model('Post', PostSchema);

export default Post;