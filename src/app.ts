import express from "express";
import dotenv from "dotenv";
import yml from "yamljs";
import swagger from "swagger-ui-express"
import path from "path";
import 'reflect-metadata'

import authRoutes from './routes/auth' 
import clientsManagement from './routes/clientsManagement' 
import userProducts from './routes/userProducts' 

dotenv.config()

const app = express()

app.use(express.json())

const swaggerDoc = yml.load(path.resolve(__dirname,`../swagger.yml`))

app.use(`/api/docs`, swagger.serve, swagger.setup(swaggerDoc))

app.use(`/api/auth`, authRoutes)
app.use(`/api/admin`, clientsManagement)
app.use(`/api/products`, userProducts)

export default app