const express= require('express');
const cors =require('cors');
const { default: axios } = require('axios');

const app= express();
app.use(express.json());
app.use(cors({origin:true}));

app.post("/authenticate",async (req,res)=>{
    const {username} =req.body;
    try{
      const r=  await axios.put(
        'https://api.chatengine.io/users/',
        {username:username , secret:username, first_name:username},
        {headers:{"private-key":"bfd1caf0-0111-406c-96e8-31d6ef77721a"}}
      )

      return res.status(r.status).json(r.data)
    }catch{
        res.status(e.response.status).json(r.response.data)
    }
   
});
/*
Project ID:
2d57158f-0605-4354-bcb4-f701bc5a1ba8
Private Key:
bfd1caf0-0111-406c-96e8-31d6ef77721a */
app.listen(3001);