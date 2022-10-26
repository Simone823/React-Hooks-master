import React from "react";
import { datiIncompleti } from "../../../data";

// import products
import Products from "./Products";

// import porp types
import propTypes from "prop-types";

// default image
const defaultImage = 'https://picsum.photos/200/300';

const PropComponent = () => {
  return (
    <div>
      <h3>Prop Types Component</h3>

      {datiIncompleti.map((el) => {
        return (
          <Products name={el.nome} image={el.image} defaultImage={defaultImage} price={el.prezzo} key={el.id} />
        )
      })}
    </div>
  );
};

Products.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired
}

Products.defaultProps = {
  name: 'Default',
  price: 20.99,
  image: defaultImage
}

export default PropComponent;
