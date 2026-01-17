import { useParams, useNavigate } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 3500,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 2,
    name: "Luxury Suite",
    price: 5500,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: 3,
    name: "Standard Room",
    price: 2500,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
  },
];

function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = rooms.find((r) => r.id === Number(id));

  if (!room) {
    return (
      <div className="p-8 text-red-600 text-xl">
        Room not found
      </div>
    );
  }

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      alert("Please login to book this room");
      navigate("/login");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(room);
    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{room.name}</h1>

          <p className="text-blue-600 text-xl font-semibold mb-4">
            ₹{room.price} / night
          </p>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
