import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from "./data";
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';
import React, { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const dupeItem = cart.find((item) => +item.id === +book.id);
    if (dupeItem) {
      setCart(
        cart.map((item) => {
          if (item.id === dupeItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
           else {
            return item;
          }
        })
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function updateQuantity(id, quantity) {
  setCart(
    cart.map(item =>
      item.id === id
        ? { ...item, quantity: Number(quantity) }
        : item
    )
  );
}

function removeFromCart(id) {
  setCart(cart.filter(item => item.id !== id));
}


function numberOfItems(){
  let counter = 0;
  cart.forEach(item => {
    counter += item.quantity
  })
  return counter;
}

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>

        <Routes>
          <Route path="/"  element={<Home />} />
       <Route path="/books"  element={<Books books={books} />} />
        <Route
  path="/books/:id"
  element={<BookInfo books={books} addToCart={addToCart} />}
/>

           <Route
            path="/cart"
            element={<Cart books={books} cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />}
          /> 
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

