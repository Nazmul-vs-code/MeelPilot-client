# 🍽️ Meal Pilot

> 🚧 **Project Status:** Meal Pilot is currently **under active development**. New features, UI improvements, and performance optimizations are being added regularly.

Meal Pilot is a modern food ordering platform built with **Next.js**, **TypeScript**, **MongoDB**, and **Better Auth**. It connects customers, restaurant owners, and administrators in a single ecosystem where restaurants can register, publish menus, and customers can discover and order delicious meals with a clean and responsive experience.

## 🌐 Live Project

- **Client:** https://meel-pilot-client.vercel.app/
- **Server:** _(Add your backend deployment URL here once deployed.)_

---

# ✨ Project Overview

Meal Pilot simplifies the food ordering experience by allowing restaurant owners to manage their restaurants and food items while enabling customers to explore restaurants and place orders. Administrators can review submitted restaurants before allowing them to appear publicly.

The project follows modern development practices including:

- ⚡ Server Components with Next.js
- 🔐 Authentication & Authorization
- 📱 Fully Responsive UI
- 🎨 Consistent Design System
- 📊 Interactive Analytics
- 🚀 Optimized Performance

---

# 🛠️ Technologies Used

## Frontend

- Next.js 15/16
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- HeroUI
- Swiper.js
- Recharts
- React Icons
- Framer Motion

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Better Auth
- JWT Authentication

## Deployment

- Vercel (Frontend)
- *(Backend deployment will be added soon.)*

---

# ⭐ Core Features

### 👤 Authentication

- Secure Sign Up & Sign In
- Protected Routes
- Role Based Access Control
- Better Auth Integration

---

### 🍽️ Restaurant Management

Restaurant owners can:

- Create restaurants
- Manage restaurant information
- Add foods
- View their restaurant list

Every newly created restaurant is submitted as **Pending** until approved by an administrator.

---

### 🍕 Food Management

- Add foods
- View latest foods
- Restaurant-based food management
- Public food listing

---

### 🛍️ Customer Features

- Browse restaurants
- Explore foods
- View restaurant details
- Responsive UI for all devices

---

### 📊 Analytics

Interactive analytics built using Recharts including:

- Food Category Analytics
- Health Score Visualization
- Category Insights
- Responsive Charts

---

### 🎨 Modern UI

- Animated Hero Section
- Interactive Slider
- Beautiful Cards
- Consistent Color Theme
- Responsive Design
- Smooth Hover Effects

---

# 👨‍💼 Admin Approval Process

After a restaurant owner creates a restaurant, it will **not** become public immediately.

### Admin Steps

1. Login as an **Admin**.
2. Navigate to **Dashboard**.
3. Open the **Restaurants** section.
4. Review all submitted restaurants.
5. Click **Approve** for the desired restaurant.
6. Once approved:
   - ✅ The restaurant becomes publicly visible.
   - ✅ The owner can start adding food items.
   - ✅ Customers can browse the restaurant.

This approval system ensures only verified restaurants are available on the platform.

---

# 📦 Main Dependencies

Some of the major packages used in this project include:

- next
- react
- typescript
- tailwindcss
- daisyui
- heroui
- better-auth
- mongodb
- express
- jose
- recharts
- swiper
- react-icons
- framer-motion
- react-hook-form
- zod

---

# 🚀 Run Locally

## 1. Clone the repository

```bash
git clone <repository-url>
```

---

## 2. Navigate to the project

```bash
cd meal-pilot
```

---

## 3. Install dependencies

```bash
npm install
```

---

## 4. Create environment variables

Create a `.env.local` (Frontend) and `.env` (Backend) file.

Example:

```env
MONGODB_URI=your_database_url

BETTER_AUTH_SECRET=your_secret

BETTER_AUTH_URL=http://localhost:3000

CLIENT_URL=http://localhost:3000
```

---

## 5. Start the frontend

```bash
npm run dev
```

---

## 6. Start the backend

```bash
npm run dev
```

or

```bash
npm start
```

---

## 7. Open in your browser

```
http://localhost:3000
```

---

# 📁 Project Structure

```
Client
│── app
│── components
│── hooks
│── lib
│── providers
│── public

Server
│── src
│── routes
│── middleware
│── utils
```

---

# 🎯 Upcoming Plans

Meal Pilot is continuously improving. Some planned features include:

- 💳 Online Payment Integration
- 📍 Live Order Tracking
- ❤️ Wishlist & Favorites
- 🔔 Real-time Notifications
- ⭐ Customer Reviews & Ratings
- 📦 Order History
- 📱 Progressive Web App (PWA)
- 📈 Advanced Dashboard Analytics
- 🎟️ Discount & Coupon System
- 🌍 Multi-language Support

---

# 📌 Notes

- 🚧 This project is still under active development.
- ✨ New features and UI improvements are added regularly.
- 🛠️ Feedback and suggestions are always appreciated.

---

# 🌐 Resources

### Live Website

https://meel-pilot-client.vercel.app/

### Backend

_Add your deployed backend URL here._

---

## ❤️ Thank you for checking out Meal Pilot!

If you like this project, consider giving it a ⭐ on GitHub. Your support is greatly appreciated! 🚀