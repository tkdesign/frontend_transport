# Transport Management System Frontend

This repository contains an example interface for transport management created using Vue.js, TypeScript, and Composition API. It demonstrates interaction with the basic functions of the server-side REST API system for managing transport orders and their waypoints.

The related backend API application can be found here:
[backend_transport](https://github.com/tkdesign/backend_transport)

## Project Overview

**Core Models:**
- **Order:** Unique order number, customer name, date
- **Waypoint:** Location address, type (Pickup/Delivery), linked to an order

## Features
- **Create Transport Order:** Form to add order details and dynamically add/remove waypoints
- **Order List:** Table displaying all orders
- **API Integration:** Uses Axios to communicate with the backend API

## Setup Instructions

### Requirements
- Node.js 22+
- npm
- Git
- **Server API**: You must run the server API (Django REST Framework) from the backend repository before starting the frontend. The frontend expects the API to be available at `http://127.0.0.1:8000/` by default.

### Local Installation
1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd frontend_transport
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```

The app will be available at [http://localhost:3000/](http://localhost:3000/).

## How to Run the App
1. Start the backend API (see backend repository for instructions).
2. Start the frontend as described above.
3. Open [http://localhost:3000/](http://localhost:3000/) in your browser.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Author: Petr Kovalenko

