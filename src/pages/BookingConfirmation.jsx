function BookingConfirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Booking Confirmed 🎉
        </h1>

        <p className="text-gray-700 mb-6">
          Your room has been successfully booked.
        </p>

        <p className="text-gray-600 mb-8">
          Thank you for choosing <strong>TecchoHotel</strong>.
        </p>

        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default BookingConfirmation;
