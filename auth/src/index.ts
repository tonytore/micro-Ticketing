import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/api/users/currentuser', (req,res)=>{
    res.send('hi tonytor')
})


app.listen(3000, ()=>{
    console.log('tonytor');
    
    console.log('server is listening on port http://localhost:3000')
})