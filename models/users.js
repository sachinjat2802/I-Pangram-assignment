import mongoose from "mongoose"
import validator from "validator";
const UserRole = Object.freeze({
   mentor :"mentor",
   employee :"employee"
 });

const UserSchema = new mongoose.Schema(
    {
     email:{
        type:String,
        required:true,
        validate:{
            validator:validator.isEmail,
            message:"Please provide a valid email"
        }
     } ,
     name:{
        type:String,
        required:true,
     },
     role:{
      type:String,
      required:true,
      enum:UserRole
     },
     password:{
        type:String,
        required:true
     } ,
     isDeleted:{
        type:Boolean,
        required:true,
        default:false,
     } 
    }
    );
    UserSchema.set("timestamps", true);

const Users = new mongoose.model("users",UserSchema);

export {Users,UserSchema,UserRole}