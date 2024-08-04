import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../Features/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const itemsInBasket = useSelector((store) => store.cartStore.items); // Adjust based on your store's state structure

  const totalQuantity = useSelector((store) => store.cartStore.totalQuantity)
  const totalPrice = useSelector((store) => store.cartStore.totalAmount)


 // const handleRemove = (id) => {
   // dispatch(removeItem(id));
  //};

 

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {itemsInBasket.length > 0 ? (
        <div>
          {itemsInBasket.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 mb-4 bg-white shadow-md rounded-lg">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">{`Price: $${item.price}`}</p>
                <p className="text-gray-500">{`Category: ${item.category}`}</p>
                <p className="text-gray-500">{`Rating: ${item.rating.rate} (${item.rating.count} reviews)`}</p>
                <p className="text-gray-500">{`Quantity: ${item.amount}`}</p>
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>
              </div>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-8 p-4 bg-gray-100 shadow-md rounded-lg">
            <h3 className="text-xl font-bold">Cart Summary</h3>
            <p className="text-gray-700">{`Total Items: ${totalQuantity}`}</p>
            <p className="text-gray-700">{`Total Price: $${totalPrice}`}</p>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      )}
    </div>
  );
};

export default Cart;
