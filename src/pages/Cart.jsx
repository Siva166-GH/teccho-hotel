import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((room) => room.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, room) => sum + room.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Your Booking Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((room) => (
            <div
              key={room.id}
              className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{room.name}</h2>
                <p className="text-blue-600">₹{room.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(room.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <div className="text-xl font-bold">Total: ₹{total}</div>

            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-600 text-white px-6 py-3 rounded-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
