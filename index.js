const express = require("express")
//const carsRouter = require("./cars-router")
const welcomeRouter = require("./welcome/welcome-router")



const server = express()
const port = process.env.PORT || 5000 


server.use (express.json())

server.use(welcomeRouter)
//server.use(carsRouter)



server.use((err, req, res, next) =>{
    console.log(err)
    res.status(500).json({
        message: "something went wrong"
    })
})

server.listen(port, () => {
    console.log(`Runing at http://localhost:${port}`)
})