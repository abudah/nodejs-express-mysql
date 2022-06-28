const express=require("express");
const cors=require("cors");
const app=express();
var corsOptions ={
	origin: "http://localhost:8081"
}
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));
//simple route
app.get('/', (req, res) => {
	res.json({message:"welcome to the main page my brother"})
});


const PORT = process.env.PORT || 8080;
require("./app/routes/tutorial.routes.js")(app);
app.listen(PORT, () => {
	console.log("listening on port 8080")
})
