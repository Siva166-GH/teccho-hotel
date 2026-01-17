import { Link } from "react-router-dom";

function RoomCard({ room }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={room.image}
        alt={room.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{room.name}</h3>
        <p className="text-blue-600 font-bold mt-1">
          ₹{room.price} / night
        </p>

        <Link to={`/room/${room.id}`}>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RoomCard;
