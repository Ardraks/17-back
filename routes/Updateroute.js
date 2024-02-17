
const Registermodel = require("../model/Register");
const app = require('express').Router()
// const multer = require('multer');

// const storage = multer.memoryStorage(); // Store images in memory
// const upload = multer({ storage: storage });

// // For saving certificatedetails
// app.post('/newProfile', upload.single('profile'), async (request, response) => {
//     try {
//                 const { username,email,password  } = request.body
//                 const newdata = new Registermodel({
//                     username,
//                     email,
//                     password,
                  
//                     profilephoto: {
//                         data: request.file.buffer,
//                         contentType: request.file.mimetype,
//                     }
//                 })
//                 await newdata.save();
//                 res.status(200).json({ message: 'profile added successfully' });
//         }
//     catch (error) 
//     {
//                 response.status(500).json({ error: 'Internal Server Error' });
//     }
// }
// )

  





module.exports = app
