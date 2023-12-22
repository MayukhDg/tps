import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },

   clerkId:{
    type:String,
    required:true,
   },

   posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post"
    }],



})


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;