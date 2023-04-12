const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

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
        const id = req.params;
        const todo = await pool.query("SELECT (*) FROM products WHERE product_id = $1", [id])
        res.json(todo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
} );


app.post("/cart-products", async(req, res) => {
    try {
        const { user_id, product_name, product_description, product_price, product_cat, product_stock } = req.body;
        const productAddedToCart = await pool.query("INSERT INTO user_cart(user_id, product_name, product_description, product_price, product_cat, product_stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [user_id, product_name, product_description, product_price, product_cat, product_stock])
        res.json(productAddedToCart.rows[0]);
        console.log(productAddedToCart.rows[0]);
    } catch (error) {
        console.error(error.message)
    }
})



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