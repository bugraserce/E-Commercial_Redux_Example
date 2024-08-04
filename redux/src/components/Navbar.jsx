import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const numberOfProduct = useSelector((store) => store.cartStore.totalQuantity); // Ensure the path matches your store structure

  return (
    <div className="bg-black text-white flex justify-between items-center p-3 px-24 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <Link className="text-3xl font-semibold" to="/">
        e-shop
      </Link>
      <Link className="flex items-center" to="/cart">
        <span>Cart</span>
        <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-sm">
          {numberOfProduct}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
