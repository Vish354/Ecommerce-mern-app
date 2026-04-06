import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/PagenotFound";

// Auth Pages
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";

// User Pages
import Dashboard from "./pages/user/Dashboard";
import Profile from "./pages/user/Profile";
import Oders from "./pages/user/Orders";

// Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateProduct from "./pages/Admin/CreateProduct";
import CreateCategory from "./pages/Admin/CreateCategory";
import Users from "./pages/Auth/Users";

// Routes Protection
import PrivateRoute from "./components/Layout/Routes/Private";
import AdminRoute from "./components/Layout/Routes/AdminRoute";
import Products from "./pages/Admin/Products";

function App() {
  return (
    <>
      {/* Toast */}
      <ToastContainer position="top-right" autoClose={2000} />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
         <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />

        {/* AUTH ROUTES */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* USER PROTECTED ROUTES */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>

        {/* ADMIN PROTECTED ROUTES */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
        </Route>

        {/* NOT FOUND */}
        <Route path="*" element={<Pagenotfound />} />

      </Routes>
    </>
  );
}

export default App;