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

//combo_food_item Table
//GET, POST, PUT, DELETE
//

router.get("/combo_food_item", async (request, response) => {
	const query_statement = `select * from combo_food_item`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

router.get("/combo_food_item/:id", async (request, response) => {
	const query_statement = `select * from combo_food_item where id = ${request.params.id}`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

router.post("/combo_food_item/:combo_id/:food_item_id", async (request, response) => {
	const query_statement = `insert into combo_food_item (combo_id, food_item_id) values (${request.params.combo_id}, ${request.params.food_item_id})`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});


router.put("/combo_food_item/:id/:combo_id/:food_item_id", async (request, response) => {
	const query_statement = `update combo_food_item set combo_id = ${request.params.combo_id}, food_item_id = ${request.params.food_item_id} where id = '${request.params.id}'`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

router.delete("/combo_food_item/:id", async (request, response) => {
	const query_statement = `delete from combo_food_item where id = '${request.params.id}'`;
	pool.query(query_statement, (error, results) => {
		if (error) {
			new Error(error);
		}
		console.log(query_statement)
		response.send(query_statement)
	})
});

module.exports = router;
