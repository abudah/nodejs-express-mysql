const mysql=require('mysql')
const dbconfig=require('../config/db.config')

//create connection

const connection=mysql.createConnection({
	host:dbconfig.HOST,
	user:dbconfig.USER,
	password:dbconfig.PASSWORD,
	database:dbconfig.DB
})

//open the MYSQL connection 

connection.connect((error)=>{
	if(error) throw error;
	console.log('succesfuly connected to the database succesfully');
})
module.exports=connection;