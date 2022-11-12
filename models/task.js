import mongoose from "mongoose"


const taskSchema = new mongoose.Schema({

     name:{
        type:String,
        required:true,
     },
     estimatedDuration:{
        type:String,
        required:true,
     },
     finalTime :{
        type:Date,
        required:true,
     },
     endTime:{
        type:Date,
        required:true,
     },
     Comment:{
        type:[String],
        required:true,
     },
     Reply:{
        type:[String],
        required:true,
     },
     QA:{
        type:[String],
        required:true,
     },
     codeQuality:{
        type:String,
        required:true,
     },
     codeQuality:{
        type:String,
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
     },
     owner:{
        type:mongoose.Types.ObjectId,
        required:true,
        default:false,
     },
     developerName:{
        type:String,
        required:true,
     },
    }
    );
    taskSchema.set("timestamps", true);

const Task = new mongoose.model("task",taskSchema);

export {Task,taskSchema}