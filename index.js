import express from 'express';
/* import bodyParser from 'body-parser'; */
import usersRoutes from './routes/users.js'
const app =express()
const PORT =5000;

app.use(express.json())
//all routes start with users here so we need to add only / in users
app.use('/users',usersRoutes)
app.get('/',(req,res)=>{
    console.log('test')
    res.send('Hello')
})

app.listen(PORT,()=>console.log(`Server Running on port:http://localhost:${PORT}`))
 