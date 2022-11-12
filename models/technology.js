import mongoose from "mongoose"


const technologySchema = new mongoose.Schema(
    {
    
     name:{
        type:String,
        required:true,
     },
     image:{
        type:String,
        required:true,
     },
     resources:{
        type:[String],
        required:true,
     },
     status:{
        type:String,
        required:true,
     }, 
      isDeleted:{
        type:Boolean,
        required:true,
        default:false,
     } 
    }
    );
    technologySchema.set("timestamps", true);

const Technology = new mongoose.model("technologys",technologySchema);

export {Technology,technologySchema}