import React from "react";
import Dashboard from "../components/Dashboard";

// Home page - main dashboard overview
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-800 to-gray-700 text-white">
      <Dashboard />
    </div>
  );
};

export default HomePage;