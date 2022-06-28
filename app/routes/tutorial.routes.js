module.exports=app=>{
	const tutorials=require("../controllers/tutorial.controller.js");
	var router=require("express").Router();
	//create a new Tutorial
	router.post('/', tutorials.create);
	//retrieve all tutorials 
	router.get('/',tutorials.findAll);
	//retrieve all published tutorials
	router.get('/',tutorials.findAllPublished);
	//retrieve single tutorial with id 
	router.get('/:id', tutorials.findOne);
	//update tutorial with id 
	router.put('/:id', tutorials.update);
	//delete tutorial with id 
	router.delete('/:id', tutorials.delete);
	//delete all tutorials
	router.delete('/:id', tutorials.deleteAll);
	app.use('/api/tutorials',router);
};