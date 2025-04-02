import React from "react";
import ProfileList from "../components/ProfileList";

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Profile Explorer</h1>
      <ProfileList />
    </div>
  );
};

export default Home;
