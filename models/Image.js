import mongoose, { Schema, model } from 'mongoose'

const ImageSchema = new Schema(
    {
        id: String,
        image: String,
        ext: String
    }
)

const Image = mongoose.models.Image || model('Image', ImageSchema);

export default Image;