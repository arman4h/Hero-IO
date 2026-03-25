import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";

export default function Layout() {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      {navigation.state !== "idle" ? <LoadingSpinner text="Navigating..." /> : <Outlet />}
      <Footer />
    </div>
  );
}
