# TecchoHotel – Hotel Booking Web Application

TecchoHotel is a responsive hotel booking web application developed using modern frontend technologies. The application demonstrates a complete booking workflow including user authentication, room browsing, booking cart, checkout, and user-specific booking history.

## Features
- User Registration and Login with validation
- Protected routes for booking-related pages
- Room listing with search functionality
- Room details page
- Booking cart and checkout flow
- User-specific booking history
- Logout functionality
- Fully responsive UI (mobile, tablet, desktop)

## Tech Stack
- React.js
- Vite
- Tailwind CSS
- React Router
- LocalStorage
- Vercel (deployment)

## Project Structure
tecchohotel/
│
├── public/
│
├── src/
│ │
│ ├── components/
│ │ ├── Hero.jsx
│ │ ├── Navbar.jsx
│ │ ├── ProtectedRoute.jsx
│ │ ├── RoomCard.jsx
│ │ └── SearchBar.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── RoomDetails.jsx
│ │ ├── Cart.jsx
│ │ ├── Checkout.jsx
│ │ ├── MyBookings.jsx
│ │ └── BookingConfirmation.jsx
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md

## Authentication and Booking Logic
- Users must register before logging in
- Login credentials are validated using stored user data
- Booking, cart, checkout, and booking history pages are protected
- Bookings are stored per user and visible only to the logged-in account
- Cart is cleared after successful checkout

## Run Locally
1. Clone the repository  
   `git clone https://github.com/Siva166-GH/teccho-hotel.git`

2. Navigate to the project folder  
   `cd tecchohotel`

3. Install dependencies  
   `npm install`

4. Start the development server  
   `npm run dev`

5. Open in browser  
   `http://localhost:5173`


## Author
Developed by Sivasankari N

## License
This project is intended for educational and demonstration purposes.
