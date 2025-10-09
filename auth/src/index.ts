import express from 'express'
import bodyParser from 'body-parser'
import { currentUser } from './routes/current-user'
import { signUp } from './routes/signup'
import { signIn } from './routes/singin'
import { signOut } from './routes/signout'


const app = express()
app.use(bodyParser.json())

app.use('/api/users', currentUser)
app.use('/api/users', signUp)
app.use('/api/users', signIn)
app.use('/api/users', signOut)




app.listen(3001, ()=>{
    console.log('tonytor');
    
    console.log('server is listening on port http://localhost:3001')
})