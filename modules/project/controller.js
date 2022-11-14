
import {Project}from "../../models/project.js";
import CrudOperations from "../../utils/crudOpertions/moongodbCrud.js";
import {verifyTokenMentor,verifyTokenEmployee} from "../../utils/jwt/currentUser.js";
import {UserRole}from "../../models/users.js";




class ProjectController{

    async createProject(req,res){
        const data = req.body;
        if(data.name){

            const project = await new  CrudOperations(Project).getDocument({"name":data.name,"isDeleted":false});
            if(project){
                return res.status(400).json({
                    "msg":"project already exists"
                })
            }
        }
                 data.owner = req.currentUser.id
                const newproject = new Project(data);
                try{
                    const result = await new CrudOperations(Project).save(newproject)
                    
    
                     res.status(201).json(
                        result
                     )
                    }
                catch(error){
                    res.status(201).json(
                         {
                             "msg":error.message
                         }
                     )
                }
    }
    async getProjects(req,res){
           if(req.params.type=="mentor"){verifyTokenMentor(req,res,async (result)=>{
                try{
                    const projects = await new CrudOperations(Project).getAllDocuments({"owner":req.currentUser.id,"isDeleted":false},{},{pageNo:0,limit:0})
                    res.status(200).json(projects)
                }
                catch(error){
                    res.status(400).json(error.message)
                }
            })}else{verifyTokenEmployee(req,res,async (result)=>{
                try{
                    const projects = await new CrudOperations(Project).getAllDocuments({ "members": { $in: req.currentUser.id },"isDeleted":false },{},{pageNo:0,limit:0})
                    res.status(200).json(projects)
                }
                catch(error){
                    res.status(400).json(error.message)
                }
          })
        }
    }
               

     async getAllProjects(req,res){
                try{
                    const projects = await new CrudOperations(Project).getAllDocuments({"isDeleted":false},{},{pageNo:0,limit:0})
                    res.status(200).json(projects)
                }
                catch(error){
                    res.status(400).json(error.message)
                }
            }
    
    async updateProject(req,res){
        try{
            const data = req.body
            const project = await new CrudOperations(Project).getDocumentById(req.params.id);
            if(project.isDeleted){
                res.status(400).json("Project already deleted")
            }
           const updatedProject=Object.assign(project,data);
           
           const result = await new CrudOperations(Project).updateDocument({_id:req.params.id},updatedProject);
           
            res.status(200).json(result)
        }
        catch(error){
            res.status(400).json(error.message)
        }
    }
    async deleteProject(req,res){
        try{
            const project = await new CrudOperations(Project).getDocumentById(req.params.id);
            if(project.isDeleted){
                res.status(400).json("Project already deleted")
            }else{
                const result = await new CrudOperations(Project).updateDocument({_id:req.params.id},{isDeleted:true});
                res.status(200).json(result)
            }
        }
            


            
        
        catch(error){
            res.status(400).json(error.message)
        }

    }
    
}

   

export const projectController = new ProjectController();