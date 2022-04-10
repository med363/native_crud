const express = require("express")
const app= express()
const usersRouter = require("./routes/users.router")
const productsRouter = require("./routes/products.router");
/*app.get("/api",(req,res)=>{
    res.send('helloo ')
})*/

/*apelle directement les req users*/
/*implement pls methodes donc on utilise app.use */
// app.use("/api",usersRouter)
// app.use("/api",productsRouter)
/*autre structure dans une seul line*/
app.use("/api",[usersRouter,productsRouter])
const PORT= 4000;
app.listen(PORT,()=> console.log(`server run on ${PORT}`))