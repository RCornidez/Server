//Express REST API using raw postgresql queries
//Express has a wonderful reference guide for routing: 
//	https://expressjs.com/en/guide/routing.html
//	https://expressjs.com/en/4x/api.html
//

const express = require('express');
const router = express();
const Pool = require('pg').Pool;


const pool = new Pool ({
	                user: 'postgres',
	                host: 'localhost',
	                database: 'postgres',
	                password:  'password',
	                port: 5432,
});

//combo Table
//GET, POST, PUT, DELETE
//

router.get("/combo", async (request, response) => {
	const query_statement = `select * from combo`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});


router.post("/combo/:title/:description/:price", async (request, response) => {
	const query_statement = `insert into combo (title, description, price) values ('${request.params.title}', '${request.params.description}', '${request.params.price}')`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

router.put("/combo/:id/:title/:description/:price", async (request, response) => {
	const query_statement = `update combo set title = '${request.params.title}', description = '${request.params.description}', price = '${request.params.price}' where id = '${request.params.id}'`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

router.delete("/combo/:id", async (request, response) => {
	const query_statement = `delete from combo where id = '${request.params.id}'`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

module.exports = router;
