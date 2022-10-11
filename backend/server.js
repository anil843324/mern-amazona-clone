
import  express  from "express";

import data from "./data.js"
const app=express();

import  cors from "cors"

app.use( cors());

app.get('/api/products',(req,res)=>{

     res.send(data.products)
     
})




const port=process.env.PORT || 5000;


app.listen( port , ()=>{

    console.log(`server at http://localhost:${port}`);
})





 