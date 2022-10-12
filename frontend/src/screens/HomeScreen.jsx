import React, { useEffect } from 'react';

import logger from 'use-reducer-logger';

import { Link } from 'react-router-dom';

import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQEST':
      return { ...state, loading: true };

    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const HomeScreen = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    dispatch({ type: 'FETCH_REQEST' });

    try {
      let result = await fetch('http://localhost:5000/api/products');

      result = await result.json();

      dispatch({ type: 'FETCH_SUCCESS', payload: result });
    } catch (err) {
      dispatch({ type: 'FETCH_FAIL', payload: err.message });
    }
  };

  console.log(products);

  return (
    <div>
      <h1>Featured Products</h1>

      <div className=" products  flex  flex-wrap   justify-center  ">
        {loading ? (
          <div> Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
