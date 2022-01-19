//===[IMPORTING THE MONGOOSE MODULE]===========================================

import mongoose from "mongoose";

//===[CREATING MONGOOSE SCHEMA FOR POSTS]============================

const postSchema = new mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String, // AN IMAGE IS STORED AS A STRING
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;




