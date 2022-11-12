
import {Technology}from "../../models/technology.js";
import CrudOperations from "../../utils/crudOpertions/moongodbCrud.js";


class TehcnologiesController{

    async addTechnology(req,res){
        const data = req.body;
        if(data.name){

            const technology = await new  CrudOperations(Technology).getDocument({"name":data.name,"isDeleted":false});
            if(technology){
                return res.status(400).json({
                    "msg":"technology already exists"
                })
            }
                const newTechnology = new Technology(data);
                try{
                    const result = await new CrudOperations(Technology).save(newTechnology)
                    
    
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
            }
        }
    
       

   

export const tehcnologiesController = new TehcnologiesController();