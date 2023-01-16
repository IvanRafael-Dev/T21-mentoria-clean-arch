import express from 'express'
import signUpRoutes from '../routes/signup-route'

const app = express()

app.use(express.json())
signUpRoutes(app)

export default app
