import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { DishContext } from "../context/dishes";
import { CartContext } from "../context/cart";

const DishDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { dishes } = useContext(DishContext);
  const { addToCart } = useContext(CartContext);

  const dish = dishes.find((dish) => {
    return dish.id === id;
  });
  if (!dish) {
    return <h3>Loading...</h3>;
  }

  const { image: url, title, description, author, price } = dish;

  return (
    <section className="dish-details">
      <div className="detail-image">
        <img src={url} alt="10x Rule" />
      </div>
      <div className="detail-description">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{author}</h3>
        <h4>Price - $ {price}</h4>
        <button
          className="btn"
          onClick={() => {
            addToCart({ ...dish, id });
            history.push("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default DishDetails;
