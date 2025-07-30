import 'reflect-metadata'
import APP from "./app"
import { dbInstance} from './config/database'

dbInstance.initialize()
.then(async()=>{
    const appPort = process.env.APP_PORT
   
    APP.listen(appPort,()=>{
        console.log(`API Server running on port [${appPort}]. Visit http://localhost:${appPort}/api/docs to documentation.`)
    })
})
.catch(err=>console.log(err))
