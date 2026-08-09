# E-Commerce Website

A modern and responsive e-commerce web application built with **React** and **Material UI (MUI)**.

## 🚀 Live Demo

**Live Website:** [https://e-commerce-n3mu.onrender.com](https://e-commerce-n3mu.onrender.com)

## 📌 About the Project

This project is a full-featured e-commerce application where users can browse products, view product details, add products to their cart, place orders, manage their profile, and leave reviews.

The application also includes authentication, password recovery, product sorting, multilingual support, and light/dark theme functionality.

## ✨ Features

* 🔐 User Registration & Login
* 🔑 Forgot & Reset Password
* 📧 Email Code Verification
* 🛍️ Browse Products
* 🔎 Product Details
* ⭐ Product Ratings & Reviews
* 🛒 Shopping Cart
* ➕ Increase / Decrease Product Quantity
* 🗑️ Remove Products from Cart
* 🧹 Clear Cart
* 💳 Checkout
* 💰 Visa & Cash on Delivery Payment Options
* 👤 User Profile
* 📦 Order History
* 🌐 Arabic & English Language Support
* 🌓 Light & Dark Theme
* 🔃 Product Sorting

  * Name: A → Z
  * Name: Z → A
  * Price: Low → High
  * Price: High → Low
  * Rating: Low → High
  * Rating: High → Low
* 📱 Responsive Design

## 🛠️ Technologies Used

### Frontend

* React
* Vite
* Material UI (MUI)
* React Router
* React Hook Form
* Yup
* React Query
* Zustand
* Axios
* i18next
* react-i18next

### API & Data Management

* REST API
* Axios
* TanStack React Query

### Authentication & State

* JWT Authentication
* Zustand
* Protected Routes
* Persistent Authentication State

## 📂 Project Structure

```text
src/
├── API/
│   └── axiosInstance.js
│
├── assets/
│   ├── logo.png
│   └── hero.png
│
├── auth/
│   ├── useAuthStore.jsx
│   └── useThemeStore.jsx
│
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Hero/
│   ├── Products/
│   ├── Categories/
│   ├── FilterProducts/
│   ├── Aboutus/
│   └── Links/
│
├── hooks/
│   ├── useProducts.jsx
│   ├── useProduct.jsx
│   ├── useCart.jsx
│   ├── useAddtoCart.jsx
│   ├── useUpdateCart.jsx
│   ├── useRemovefromCart.jsx
│   ├── useClearCart.jsx
│   ├── useCheckout.jsx
│   ├── useProfile.jsx
│   ├── useCategories.jsx
│   ├── useAddReview.jsx
│   ├── useSendCode.jsx
│   └── useResetPassword.jsx
│
├── pages/
│   ├── Login/
│   ├── Register/
│   ├── ForgotPassword/
│   ├── CodeVerification/
│   ├── NewPassword/
│   ├── Home/
│   ├── Shop/
│   ├── ProductDetails/
│   ├── Cart/
│   ├── Checkout/
│   └── Profile/
│
├── ProtectedRouter/
│
├── layout/
│
├── validations/
│
├── i18next.jsx
├── routes.jsx
├── theme.jsx
├── App.css
├── App.jsx
└── main.jsx
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/OmarMoayad/e-commerce.git
```

Navigate to the project directory:

```bash
cd e-commerce
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```


## 📸 Pages

The application includes:

* Login
* Registration
* Forgot Password
* Code Verification
* Reset Password
* Home
* Shop
* Product Details
* Shopping Cart
* Checkout
* Profile
* Orders

## 🌍 Internationalization

The application supports:

* 🇬🇧 English
* 🇵🇸 Arabic

Users can switch between languages directly from the navigation bar.

## 🎨 UI & Design

The interface is built entirely using **Material UI**, with a clean and minimal design focused on:

* Responsive layouts
* Consistent spacing
* Reusable components
* Light/Dark themes
* Simple product cards
* Responsive navigation
* Mobile-friendly pages

## 🛒 Shopping Flow

```text
Register / Login
       ↓
    Browse Shop
       ↓
  Product Details
       ↓
    Add to Cart
       ↓
      Cart
       ↓
    Checkout
       ↓
     Order
```

## 🔐 Password Recovery Flow

```text
Forgot Password
       ↓
   Enter Email
       ↓
   Send Code
       ↓
 Code Verification
       ↓
   New Password
       ↓
 Password Reset
```

## 📄 License

This project was created for educational and development purposes.

---

## 👨‍💻 Author

**Omar Moayad**

GitHub: [OmarMoayad](https://github.com/OmarMoayad)

### 🔗 Live Project

[View the Live E-Commerce Website](https://e-commerce-n3mu.onrender.com)
