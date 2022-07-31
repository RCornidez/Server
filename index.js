const express = require('express');
const bodyParser = require('body-parser');
const Pool = require('pg').Pool;
const cors = require('cors');


const pool = new Pool ({
	        user: 'postgres',
	        host: 'localhost',
	        database: 'postgres',
	        password:  'password',
	        port: 5432,
});


pool.connect();

const port = 3001;

const app = express();

//parse the bodies of all incoming requests as json 
app.use(bodyParser.json());

app.use(cors({origin: '*'}));

//routes
app.use('/api', require('./routes/food_item.js'));
app.use('/api', require('./routes/combo.js'));
app.use('/api', require('./routes/order.js'));
app.use('/api', require('./routes/combo_food_item.js'));
app.use('/api', require('./routes/order_food_item.js'));
app.use('/api', require('./routes/order_combo.js'));

//actively listen on port
app.listen(port, () => {console.log(`Backend is running on ${port}`)});


