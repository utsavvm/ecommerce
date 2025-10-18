import { Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./component/component/layout/Navbar";
import Mainlayout from "./component/component/layout/Mainlayout";
import Contact from "./component/component/pages/Contact";
import About from "./component/component/pages/About";
import Signup from "./component/component/pages/Signup";
import Login from "./component/Navvv/Login";
import Cart from "./component/component/pages/Cart";
import Fav from "./component/component/pages/Fav";

import User from "./component/component/pages/Profile";
import AccountManagement from "./component/component/layout/AccountManagement";

import UserDetail from "./component/component/layout/UserDetail";


import AdminLogin from "./component/Navvv/AdminLogin";
import ProtectedRouteUser from "./component/Context/AuthContext";
import ProtectAuthRoute from "./ProtectedRouter/UserProtectedRoute";

function Router() {
  return (
    <Routes>
      {/* Redirect root path to login if not authenticated */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Main layout with navbar for authenticated users */}
      <Route element={<ProtectedRouteUser />}>
        <Route element={<Navbar />}>
          <Route path="/home" element={<Mainlayout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourites" element={<Fav />} />
          <Route path="/profile" element={<User />} />
          <Route path="/account" element={<AccountManagement />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Route>
      </Route>

      {/* Authentication pages - accessible only when not logged in */}
      <Route
        path="/login"
        element={
          <ProtectAuthRoute>
            <Login />
          </ProtectAuthRoute>
        }
      />
      <Route 
        path="/signup"
        element={
          <ProtectAuthRoute>
            <Signup />
          </ProtectAuthRoute>
        }
      />
      
      {/* Admin login */}
      <Route
        path="/admin/login"
        element={
          <ProtectAuthRoute>
            <AdminLogin />
          </ProtectAuthRoute>
        }
      />
    </Routes>
  );
}

export default Router;
