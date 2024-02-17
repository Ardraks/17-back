const { request, response } = require('express');

const app = require('express').Router()
const multer = require('multer');
const Writemodel = require('../model/Write');
const upload = multer(); 



app.post('/writenew',(request,response)=>{
    new Writemodel(request.body).save();
    response.send("Record saved Sucessfully")
})





app.put('/pedit/:id',upload.single('image'),async(request,response)=>{
    try{
        const id = request.params.id;
        const {username,email,password}=request.body;
        let result=null;
        if(request.file){
            console.log("zxczcb")
            const updatedData={
                title,
                desc,
    
               profilephoto:{
                    data:request.file.buffer,
                    contentType:request.file.mimetype,
                }
            };
            result=await Writemodel.findByIdAndUpdate(id,updatedData);
            }
            else{
                const updatedData={
                      title,
                desc,
                }
                result=await Writemodel.findByIdAndUpdate(id,updatedData); 
            }
            if(!result){
                return response.status(404).json({message:'Item not found'});
            }
            response.status(200).json({message:'Item updated successfully',data:result});
        }
        catch(error){
            console.error(error);
            response.status(500).json({error:'Internal server error'});
        }
});


module.exports=app
