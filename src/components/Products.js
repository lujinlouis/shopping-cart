import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Animal Crossing",
    imgURL:
      "https://static-ca.gamestop.ca/images/products/751287/3max.jpg",
    price: 66,
  },
  {
    id: 2,
    name: "Mario Kart 8 Deluxe",
    imgURL:
      "https://static-ca.gamestop.ca/images/products/729218/3max.jpg",
    price: 50,
  },
  {
    id: 3,
    name: "Halo Infinite - Digital",
    imgURL:
      "https://static-ca.gamestop.ca/images/products/767276/3max.jpg",
    price: 85,
  },
  {
    id: 4,
    name: "Grand Theft Auto",
    imgURL:
      "https://static-ca.gamestop.ca/images/products/766244/3max.jpg",
    price: 65,
  },
  {
    id: 5,
    name: "Super Mario Party",
    imgURL:
      "https://static-ca.gamestop.ca/images/products/739714/3max.jpg",
    price: 80,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
