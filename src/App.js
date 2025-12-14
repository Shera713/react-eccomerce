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
          } else {
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

  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/"  element={<Home />} />
       <Route path="/books"  element={<Books books={books} />} />
          <Route
            path="/books/:id"
           element={<BookInfo books={books} />}
          />
          {/* <Route
            path="/cart"
            element={<Catr books={books} />}
          /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

