import dotenv from 'dotenv'
import express from 'express';

dotenv.config({
    path: './env'
})


const app = express();

app.get('/api' , (req,res)=>{

    res.send("Hello from Server.");

})

app.listen(process.env.PORT , () => {
    console.log(`Server is listening on PORT : ${process.env.PORT}`);
})