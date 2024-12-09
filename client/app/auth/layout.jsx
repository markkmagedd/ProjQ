import React from "react";
import Navbar from "@/components/Navbar";
// Define custom layout for auth pages
const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-t from-base-100 via-primary to-base-200 min-h-screen flex items-center justify-center">
        <div>{children}</div>
      </main>
    </>
  );
};

export default AuthLayout;
