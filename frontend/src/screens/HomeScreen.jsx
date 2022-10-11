import React from 'react';
import data from '../data';

import { Link } from 'react-router-dom';
const HomeScreen = () => {
  return (
    <div>
      <h1>Featured Products</h1>

      <div className=" products  flex  flex-wrap   justify-center  ">
        {data.products.map((product) => (
          <div
            className="product m-4 border-solid border-[1px] border-[#404040] "
            key={product.slug}
          >
            <Link to={`/product/${product.slug}`}>
              <img
                className=" w-full max-w-[300px]"
                src={product.image}
                alt={product.name}
              />
            </Link>
            <div className="product-info  p-4 ">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p> ${product.price}</p>

              <button className="border-solid border-[1px] border-[#404040] p-1 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
