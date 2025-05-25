# Bistro BALTS - Food Delivery Application

## Project Description

Bistro BALTS is a comprehensive full-stack food delivery web application that provides a seamless experience for customers to browse, order, and track food deliveries. The project consists of three main components: a customer-facing frontend, an administrative panel, and a robust backend API.

### Key Features

**Customer Frontend:**
- Browse food items by categories (Salads, Sushi, Desserts, Smoothies, Wraps, Hot dishes)
- Advanced filtering and search functionality
- Shopping cart management with real-time updates
- User authentication (registration/login)
- Secure payment processing via Stripe
- Cash on delivery option
- Order tracking and history
- Responsive design for all devices

**Admin Panel:**
- Add, edit, and remove food items
- Upload and manage product images
- View and manage customer orders
- Update order status in real-time
- Product inventory management

**Backend API:**
- RESTful API architecture
- User authentication with JWT tokens
- Secure password hashing with bcrypt
- File upload handling for product images
- Payment integration with Stripe
- Order management system
- MongoDB database integration

### Technology Stack

**Frontend:**
- React 18.2
- React Router DOM for navigation
- Tailwind CSS for styling
- Axios for API communication
- React Toastify for notifications
- Stripe integration for payments

**Backend:**
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- Multer for file uploads
- Stripe for payment processing
- CORS for cross-origin requests
- Bcrypt for password security

**Database:**
- MongoDB (hosted on MongoDB Atlas)

**Deployment:**
- Backend deployed on Render
- Frontend can be deployed on Vercel/Netlify

## Setup and Run Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm package manager
- MongoDB Atlas account (or local MongoDB installation)
- Stripe account for payment processing

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the backend directory and add:
   ```env
   JWT_SECRET=your_jwt_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   PORT=4000
   ```

4. **Database Configuration:**
   Update the MongoDB connection string in `config/db.js` with your database credentials.

5. **Start the backend server:**
   ```bash
   npm run server
   ```
   The backend will run on `http://localhost:4000`

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Update the API URL in `src/Context/StoreContext.jsx` if running locally:
   ```javascript
   const url = "http://localhost:4000"
   ```

4. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

### Admin Panel Setup

1. **Navigate to the admin directory:**
   ```bash
   cd admin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the admin panel:**
   ```bash
   npm run dev
   ```
   The admin panel will run on `http://localhost:5174`

### Complete Setup Process

1. **Clone the repository:**
   ```bash
   git clone git@github.com:TohirD/DIP392-group_TMDA.git
   cd food-delivery-app
   ```

2. **Setup all components:**
   ```bash
   # Install backend dependencies
   cd backend && npm install

   # Install frontend dependencies
   cd ../frontend && npm install

   # Install admin dependencies
   cd ../admin && npm install
   ```

3. **Start all services:**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run server

   # Terminal 2 - Frontend
   cd frontend && npm run dev

   # Terminal 3 - Admin Panel
   cd admin && npm run dev
   ```

## Team Roles and Responsibilities

### **Tohir Davjanov** - 221ADB156 (Project Administrator)
**Role:** Full-Stack Developer & Project Lead
- **Responsibilities:**
  - Overall project architecture and design
  - Code review and quality assurance
  - Admin panel development and functionality
  - Product management system (add, edit, delete products)
  - Database integration and data flow management
  - Image upload and storage implementation
  - Project coordination and technical leadership

### **Diyorbek Kholmirzaev** - 221AD193
**Role:** Frontend Developer
- **Responsibilities:**
  - Frontend application development and logic
  - User interface design and implementation
  - Advanced filtering and search functionality
  - Shopping cart management system
  - Component development and optimization
  - State management and data flow
  - User experience enhancement

### **Ayubkhon Salimov** - 221ADB220
**Role:** Frontend Developer & UI/UX Designer
- **Responsibilities:**
  - Project prototype design and development
  - User interface styling and visual design
  - Responsive design implementation
  - Frontend bug fixing and debugging
  - User experience optimization
  - Design consistency and branding
  - Cross-device compatibility testing

### **Myroslav Suprun** - 221ADB197
**Role:** Backend Developer
- **Responsibilities:**
  - Backend API development and architecture
  - User authentication and authorization system
  - Database schema design and implementation
  - User registration and login functionality
  - Data validation and security measures
  - API endpoint development
  - Database operations and optimization

## Project Structure

```
food-delivery-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── Context/
│   │   └── assets/
│   └── package.json
├── admin/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   └── package.json
└── README.md
```

## Features Implementation

- **User Authentication:** Secure login/register system with JWT tokens
- **Product Management:** Full CRUD operations for food items
- **Shopping Cart:** Real-time cart updates with persistent storage
- **Payment Processing:** Integration with Stripe and cash on delivery
- **Order Management:** Complete order lifecycle from placement to delivery
- **Admin Dashboard:** Comprehensive management interface
- **Responsive Design:** Mobile-first approach for all screen sizes

## API Endpoints

- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (Admin)
- `POST /api/cart/add` - Add item to cart
- `POST /api/order/place` - Place new order
- `GET /api/order/list` - Get all orders (Admin)

## Contributing

Each team member is responsible for their designated areas while collaborating on shared components. All code changes should be reviewed by the project administrator before merging.
