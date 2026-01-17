import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    const userBookings =
      JSON.parse(
        localStorage.getItem(`bookings_${currentUser}`)
      ) || [];

    setBookings(userBookings);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((booking, index) => (
          <div
            key={booking.id}
            className="bg-white p-4 rounded-lg shadow mb-4"
          >
            <h2 className="font-semibold">
              Booking #{index + 1}
            </h2>

            {booking.items.map((room) => (
              <p key={room.id}>
                {room.name} – ₹{room.price}
              </p>
            ))}

            <p className="font-bold mt-2">
              Total: ₹{booking.total}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyBookings;
