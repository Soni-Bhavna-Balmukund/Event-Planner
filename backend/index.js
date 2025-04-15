const express = require('express')
const cors =  require('cors')

const app = express()
app.use(cors)
app.use(express.json())
const port = 5000;


    const startServer = async() => {
        try{
            app.listen(port,()=>{
                console.log(`server running on port ${port}`)
            })
        }
        catch(error){
            console.log(error)
        }
    }    

startServer()
