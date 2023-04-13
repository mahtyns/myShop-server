const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const pg = require('pg')

const db_URL = 'postgres://nxcwclte:qbUqD7ikUh0bO4j9JJBOR_QUnf7TEcwM@horton.db.elephantsql.com/nxcwclte'
var client = new pg.Client(db_URL);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM products_table', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    client.end();
  });
});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/cart-products", async(req,res)=> {
    try {
       const allProducts = await pool.query("SELECT * FROM user_product");
       res.json(allProducts.rows);
              
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/products:id", async (req,res) => {
    try {
        const product_id = req.params;
        const todo = await pool.query("SELECT (*) FROM products WHERE product_id = $1", [product_id])
        res.json(todo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
} );

app.get('/cart-products/:product_id', async (req, res) => {
  try {
    const { product_id } = req.params;
    const getProduct = await pool.query(
      'SELECT * FROM user_product WHERE product_id = $1', [product_id]
    );
    res.json(getProduct.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

app.post('/cart-products', async (req, res) => {
  try {
    const { product_id, product_name, product_description, product_price, product_cat, product_stock, product_url } = req.body;
    const result = await pool.query(
      'INSERT INTO user_product (product_id, product_name, product_description, product_price, product_cat, product_stock, product_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [product_id, product_name, product_description, product_price, product_cat, product_stock, product_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/cart-products/:product_id', async (req, res) => {
    try {
        const { product_id } = req.params;
        const deleteProduct = await pool.query(
            'DELETE FROM user_product WHERE product_id = $1', [product_id]
        );
        res.send(`Deleted cart product with ID ${product_id}`);
        res.status(204).end();
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});


app.get("/products", async(req,res)=> {
    try {
       const allProducts = await pool.query("SELECT * FROM products_table;");
       res.json(allProducts.rows);
              
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/products/:id", async(req,res) => {
    try {
        const id = req.params;
        const product = await pool.query("SELECT (*) FROM products_table WHERE product_id = $1", [id])
        res.json(products_table.rows[0])
    } catch (error) {
        console.error(error.message)

    }
} )

app.listen(5000, () => {
    console.log("Server for myshop started on port 5000")
} )