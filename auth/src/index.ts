import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { currentUser } from './routes/current-user'
import { signUp } from './routes/signup'
import { signIn } from './routes/singin'
import { signOut } from './routes/signout'
import { errorHandler } from './middleware/errorHandler'



const app = express();
app.use(bodyParser.json());

app.use('/api/users', currentUser)
app.use('/api/users', signUp)
app.use('/api/users', signIn)
app.use('/api/users', signOut)

app.use(errorHandler)

const start = async ()=>{
  try {
    await mongoose.connect('mongodb+srv://ticket:ticket@cluster0.udwrqzz.mongodb.net/auth')
    console.log('connected to db')
    app.listen(3000, ()=>{
      console.log('server is listening on port http://localhost:3000')
  })
  } catch (err) {
    console.error(err)
  }
  
}

start()
