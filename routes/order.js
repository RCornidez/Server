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

//customer_order Table
//GET, POST, PUT, DELETE
//

router.get("/customer_order", async (request, response) => {
	const query_statement = `select * from customer_order`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});


router.post("/customer_order/:title/:description/:price", async (request, response) => {
	const query_statement = `insert into customer_order (title, description, price) values ('${request.params.title}', '${request.params.description}', '${request.params.price}')`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

router.put("/customer_order/:id/:title/:description/:price", async (request, response) => {
	const query_statement = `update customer_order set title = '${request.params.title}', description = '${request.params.description}', price = '${request.params.price}' where id = '${request.params.id}'`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

router.delete("/customer_order/:id", async (request, response) => {
	const query_statement = `delete from customer_order where id = '${request.params.id}'`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

module.exports = router;
