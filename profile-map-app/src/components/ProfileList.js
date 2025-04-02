import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import MapComponent from "./MapComponent";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Fetch Profiles from Backend
  useEffect(() => {
    fetch("http://localhost:5000/api/profiles")
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error("Error fetching profiles:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4">
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <ProfileCard key={profile._id} profile={profile} onSelect={setSelectedProfile} />
          ))
        ) : (
          <p>Loading profiles...</p>
        )}
      </div>
      <div className="h-96">
        <MapComponent profiles={profiles} selectedProfile={selectedProfile} />
      </div>
    </div>
  );
};

export default ProfileList;
