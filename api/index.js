import  express  from "express";
import wordRoutes from './routes/word.js'
import cors from 'cors'


const app = express();
//配置中间件
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Credentials',true)
    next()
})
app.use(express.json())
app.use(cors())



app.use('/api/word',wordRoutes)


app.listen(8800,()=>{
    console.log(`!!0.0-Server is running on port 8800-0.0!!`);
})