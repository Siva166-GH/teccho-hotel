import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const total = cart.reduce(
    (sum, room) => sum + room.price,
    0
  );

  const handleConfirmBooking = () => {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      alert("Please login again");
      navigate("/login");
      return;
    }

    const previousBookings =
      JSON.parse(
        localStorage.getItem(`bookings_${currentUser}`)
      ) || [];

    const newBooking = {
      id: Date.now(),
      items: cart,
      total,
    };

    localStorage.setItem(
      `bookings_${currentUser}`,
      JSON.stringify([...previousBookings, newBooking])
    );

    localStorage.removeItem("cart");
    navigate("/bookings");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow max-w-xl">
          <h2 className="text-xl font-semibold mb-4">
            Booking Summary
          </h2>

          {cart.map((room) => (
            <div
              key={room.id}
              className="flex justify-between mb-2"
            >
              <span>{room.name}</span>
              <span>₹{room.price}</span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={handleConfirmBooking}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
