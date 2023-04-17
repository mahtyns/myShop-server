import React, { useState, useEffect, useRef } from "react";
import AlertInformationNavbar from "./components/AlertInformationNavbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Form from "./pages/Form";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import PurchaseSummary from "./pages/PurchaseSummary";
import ProductsCatalog from "./pages/ProductsCatalog";


const App = () => {

  const [productCatalogList, setProductCatalogList] = useState([]);
  const [itemsAddedToCartList, setItemsAddedToCartList] = useState([]);
  const [finalPriceCount, setFinalPriceCount] = useState(0);
  // const finalPriceCount = useRef(null)
  const [itemsCartNumber, setItemsCartNumber] = useState(0);
  const [deliveryOptionId, setDeliveryOptionId] = useState(null);

  const getProductsFromDB = async () => {
      try {
        const response = await fetch("http://localhost:5000/products", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const responseToJsonData = await response.json();
        setProductCatalogList(responseToJsonData);

      } catch (error) {
        console.error(error.message);
      }
  };

  useEffect(() => {
    getProductsFromDB();
  }, [])

  //Adding items to user cart

//  const addToCart = (product) => {
//   if (!checkIfRepeatedInCart(product.product_id))
//   {
//   fetch('http://localhost:5000/cart-products', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       product_id: product.product_id,
//       product_name: product.product_name,
//       product_description: product.product_description,
//       product_price: product.product_price,
//       product_cat: product.product_cat,
//       product_stock: product.product_stock,
//       product_url: product.product_url,
//       product_quantity: 1
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
//     }
//    else {
//     const newQuantity = product.product_quantity + 1;
//     fetch(`http://localhost:5000/cart-products/${product.product_id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },    
//       body: JSON.stringify({
//         product_quantity: newQuantity,
//         product_id: product.product_id
//       })
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
//   }  
// }
// ;

  const addFirstToCart = (product) => {
    fetch('http://localhost:5000/cart-products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      product_id: product.product_id,
      product_name: product.product_name,
      product_description: product.product_description,
      product_price: product.product_price,
      product_cat: product.product_cat,
      product_stock: product.product_stock,
      product_url: product.product_url,
      product_quantity: 1
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  }

  const changeQuantityInCart = (product) => {
    const newQuantity = product.product_quantity + 1;
    fetch(`http://localhost:5000/cart-products/${product.product_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },    
      body: JSON.stringify({
        product_quantity: newQuantity,
        product_id: product.product_id
      })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  }

  const getProductsInCart = async () => {
      try {
        const response = await fetch("http://localhost:5000/cart-products", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const responseToJsonData = await response.json();
        setItemsAddedToCartList(responseToJsonData);
      } catch (error) {
        console.error(error.message);
      }
  };

  const updateProductStock = async (product) => {
    try {
      const newStock = product.product_stock - 1;
      const response = await fetch(`http://localhost:5000/products/${product.product_id}`, 
      {
        method: "PUT",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({stock: newStock})
      })
       const updatedProduct = await response.json();
      return updatedProduct;
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getProductsInCart();
    setItemsCartNumber(itemsAddedToCartList.length)
 
    const getPrice = (item) => { return item.product_price}
    const sum = (a,b) => {return a + b}
    if (itemsAddedToCartList.length !== 0 ) {const sumPrice = itemsAddedToCartList.map(getPrice).reduce(sum)
    setFinalPriceCount(sumPrice)} else setFinalPriceCount(0);


  }, [itemsAddedToCartList])

    const checkIfRepeatedInCart = (index) => {
      let repeatedItemInCart = itemsAddedToCartList.find((product)=> product.id === index);
      return repeatedItemInCart;
    }   


    const chooseDeliveryOption = (e) => {
        setDeliveryOptionId(e.target.value); 
     }

  const deleteFromCart = (productId) => {
      const handleDelete = async () => {
        try {
          const response = await fetch(`http://localhost:5000/cart-products/${productId}`, {
            method: 'DELETE'
          } );
        // const data = await response.json();
        console.log(response)
        } catch (error) {
          console.log(error.message)
        }
      }
      handleDelete()
  }


  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar itemsAddedToCartList={itemsAddedToCartList}
        finalPriceCount = {finalPriceCount}
        itemsCartNumber={itemsCartNumber} />
        <AlertInformationNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Cart itemsAddedToCartList={itemsAddedToCartList}
              finalPriceCount={finalPriceCount}
              chooseDeliveryOption={chooseDeliveryOption}
              deleteFromCart={deleteFromCart}
              />
            }
          />
          <Route path="/contact" element={<Form />} />
          <Route
            path="/products"
            element={<ProductsCatalog 
              productCatalogList={productCatalogList} 
              // addToCart={addToCart}
              checkIfRepeatedInCart={checkIfRepeatedInCart}
              addFirstToCart={addFirstToCart}
              changeQuantityInCart={changeQuantityInCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<PurchaseSummary 
          itemsAddedToCartList={itemsAddedToCartList}
          finalPriceCount={finalPriceCount}
          deliveryOptionId={deliveryOptionId} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
