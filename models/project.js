import mongoose from "mongoose"


const projectSchema = new mongoose.Schema({
    
     name:{
        type:String,
        required:true,
     },
     requirements:{
        type:[String],
        required:true,
     },
     startTime:{
        type:Date,
        required:true,
     },
     endTime:{
        type:Date,
        required:true,
     },
     document:{
        type:[String],
        required:true,
     },
     members:{
        type:[mongoose.Types.ObjectId],
        required:true,
     },
     techStack:{
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
     },
     owner:{
        type:mongoose.Types.ObjectId,
        required:true,
        default:false,
     } 
    }
    );
    projectSchema.set("timestamps", true);

const Project = new mongoose.model("project",projectSchema);

export {Project,projectSchema}