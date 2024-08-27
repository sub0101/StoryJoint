import  { app }from "./app"
import { Server }from "http"
import env from "./config"

const server:Server = app.listen(process.env.PORT , ()=>{
    console.log(`server is running at ${env.PORT}`)
})



