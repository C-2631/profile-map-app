import React from "react";

const ProfileCard = ({ profile, onSelect }) => {
  return (
    <div
      className="border p-4 mb-2 cursor-pointer hover:bg-gray-200"
      onClick={() => onSelect(profile)}
    >
      <h3 className="text-lg font-bold">{profile.name}</h3>
      <p>{profile.address}</p>
    </div>
  );
};

export default ProfileCard;
