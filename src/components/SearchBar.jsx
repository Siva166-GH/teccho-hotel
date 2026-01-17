function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-5xl mx-auto -mt-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

        <input
          type="text"
          placeholder="Search room (e.g. Deluxe)"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border rounded-lg px-4 py-2 md:col-span-4"
        />

        <button
          className="bg-blue-600 text-white rounded-lg px-4 py-2"
        >
          Search
        </button>

      </div>
    </div>
  );
}

export default SearchBar;
