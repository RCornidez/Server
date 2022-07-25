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

//order_combo Table
//GET, POST, PUT, DELETE
//

router.get("/order_combo", async (request, response) => {
	const query_statement = `select * from order_combo`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

router.get("/order_combo/:id", async (request, response) => {
	const query_statement = `select * from order_combo where id = ${request.params.id}`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

router.post("/order_combo/:customer_order_id/:combo_id", async (request, response) => {
	const query_statement = `insert into order_combo (customer_order_id, combo_id) values (${request.params.customer_order_id}, ${request.params.combo_id})`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});



router.put("/order_combo/:id/:customer_order_id/:combo_id", async (request, response) => {
	const query_statement = `update order_combo set customer_order_id = ${request.params.customer_order_id}, combo_id = ${request.params.combo_id} where id = '${request.params.id}'`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

router.delete("/order_combo/:id", async (request, response) => {
	const query_statement = `delete from order_combo where id = '${request.params.id}'`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

module.exports = router;
