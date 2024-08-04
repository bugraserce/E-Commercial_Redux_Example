import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Features/productSlice'; // Ensure the action is correctly imported
import { addToCart } from '../Features/cartSlice';


const Products = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.productsStore.products); // Adjust based on your store's state structure
  const { status, error } = useSelector((store) => store.productsStore);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);


  if (status === 'loading') {
    return <div>Loading....</div>;
  }
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center space-x-6">
        {items &&
          items.map((product) => (
            <div key={product.id} className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg mb-6">
              <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
              <div className="flex flex-col justify-between mt-4 w-full">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-500">{`$${product.price}`}</p>
                </div>
                <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md cursor-pointer"
                onClick={() => dispatch(addToCart(product))}
                >Add to cart</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
