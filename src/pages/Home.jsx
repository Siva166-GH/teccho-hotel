import { useState } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import RoomCard from "../components/RoomCard";

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

function Home() {
  const [searchText, setSearchText] = useState("");

  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Hero />
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-bold mb-6">
          Featured Rooms
        </h2>

        {filteredRooms.length === 0 ? (
          <p className="text-gray-600">
            No rooms found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
