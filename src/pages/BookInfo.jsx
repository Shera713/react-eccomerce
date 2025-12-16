import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";

const BookInfo = ({ books, addToCart }) => {
  const { id } = useParams();
  const book = books.find(book => +book.id === +id);

  const navigate = useNavigate();          // ✅ inside component
  const [added, setAdded] = useState(false); // ✅ inside component

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>

            <div className="book__selected">
              <figure className="book__seleceted--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>

              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                </div>

                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam rem sunt minima...
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam rem sunt minima...
                  </p>
                </div>

                {/* Button that switches from Add to Cart → Checkout */}
                <button
                  className="btn"
                  onClick={() => {
                    if (!added) {
                      addToCart(book);
                      setAdded(true);
                    } else {
                      navigate("/cart"); // go to Cart page
                    }
                  }}
                >
                  {added ? "Checkout" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended books section */}
        <div className="books__container">
          <div className="row">
            <h2 className="book__selected--title--top">Recommended Books</h2>
          </div>
          <div className="books">
            {books
              .filter(b => b.rating === 5 && +b.id !== +id)
              .slice(0, 4)
              .map(b => <Book book={b} key={b.id} />)}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
