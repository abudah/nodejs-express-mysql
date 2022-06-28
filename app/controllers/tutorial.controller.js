const Tutorial= require('../models/tutorial.model.js');

//create and save new tutorial

exports.create=(req,res)=>{
	//validate the request 
	 if(!req.body){
		res.status(400).send({
			message:"Content can not be empty!"
			});
	 }
	 //create tutorial

	 const tutorial=new Tutorial({
		title: req.body.title,
		description: req.body.description,
		published: req.body.published||false,
	 })


	 //save tutorial in the database 
	 
	 Tutorial.create(tutorial, (err,data) => {
		if(err)
			res.status(500).send({
				message: err.message||"some error occurred while creating the tutorial"
			});
		 else res.send(data);
	 });
};

//retrieve all Tutorials from database

exports.findAll=(req,res)=>{
	const title = req.query.title;
	Tutorial.getAll(title, (err, data)=>{
		if(err){
			res.status(500).send({
				message:err.message||"some error occurred while retrieving tutorials."
			});
		}
			else res.send(data);
	});
};

//find single tutorial with id 

exports.findOne=(req,res)=>{
	Tutorial.findById(req.params.id, (err,data)=>{
		if(err){
			if(err.kind=="not_found"){
				res.status(404).send({
					message:`Not Found Tutorial with id ${req.params.id}.`
				});
			}else{
				res.status(500).send({
					message:"Error Retrieving tutorial with id" + req.params.id
				});
			}
		}else res.send(data);
	}
)};

//find All Published Tutorials

exports.findAllPublished=(req,res)=>{
	Tutorial.getAllPublished((err, data)=>{
		if(err){
			res.status(500).send({message:err.message || "Some error occured while retrieving tutorials"});
		}
		else res.send(data);
	})
};

//update a tutorial identified by the id in the request

exports.update=(req,res)=>{
	//validate the request 
	if(!req.body){
		res.status(400).send({
			message: "Content can not be empty!"
		});
	}
	console.log(req.body);
	Tutorial.updateById(
		req.params.id,
		new Tutorial(req.body),
		(err,data)=>{
			if(err){
				if(err.kind=="not_found"){
					res.status(404).send({
						message:`Not Found Tutorial with id  ${req.params.id}.`
					});
				}
				else{
					res.status(500).send({
						message:"Error updating tutorial with id "+req.params.id
					});
				}
			}else{
				res.send(data);
			}
		}
	);
};

//delete a tutorial with the specified id in the request 

exports.delete=(req,res)=>{
	Tutorial.remove(req.params.id,(err,data)=>{
		if(err){
			if(err.kind=="not_found"){
				res.status(400).send({
					message:"Not Found Tutorial with id ${req.params.id}"
				});
			}else{
				res.status(500).send({
					message:"Couldn't delete tutorial with id "+req.params.id
				});
			}
		}else res.send({message:`Tutorial was deleted Succesfully!`});
	});
};

//delete all tutorials from the database

exports.deleteAll=(req,res)=>{
	Tutorial.removeAll((err,data)=>{
		if(err){
			res.status(500).send({
				message:err.message||"Some error occured while removing all tutorials"
			})
		}else res.send({
			message:`All tutorials were Deleted successfully`
		});
	});
};


