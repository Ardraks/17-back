
const { request, response } = require('express');
const Registermodel=require('../model/Register');
const updatemodel = require('../model/Update');
const app = require('express').Router()
const multer = require('multer');
const upload = multer(); 



app.post('/registerview', async (request, response) => {
  const { username, email, password } = request.body;
  
    try {
      
      // Basic validation
      if (!username || !email || !password) {
        return response.status(400).json({ message: 'All fields are required' });
      }
  
      // Check if the email already exists
      const existingUser = await Registermodel.findOne({ email });
      if (existingUser) {
        return response.status(400).json({ message: 'Email already registered' });
      }
      // Create a new user
    const newUser = new Registermodel({ username, email, password });
    await newUser.save();

    response.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/sview',async(request,response)=>{
    var data = await Registermodel.find();
    response.send(data)
  })

app.put('/pedit/:id',upload.single('profilephoto'),async(request,response)=>{
    try{
        const id = request.params.id;
        const {username,email,password}=request.body;
        let result=null;
        if(request.file){
            console.log("zxczcb")
            const updatedData={
                username,
                email,
                password,
               profilephoto:{
                    data:request.file.buffer,
                    contentType:request.file.mimetype,
                }
            };
            result=await updatemodel.findByIdAndUpdate(id,updatedData);
            }
            else{
                const updatedData={
                    username,
                    email,
                    password,
                }
                result=await updatemodel.findByIdAndUpdate(id,updatedData); 
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
