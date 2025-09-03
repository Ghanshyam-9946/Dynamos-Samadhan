// import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "50px" }}>
      <ProfileCard
        name="Sumit Joshi"
        role="Backend Developer"
        image="https://via.placeholder.com/100" 
      />
      <ProfileCard
        name="Aman Sharma"
        role="Frontend Developer"
        image="https://via.placeholder.com/100"
      />
      <ProfileCard
        name="Priya Singh"
        role="UI/UX Designer"
        image="https://via.placeholder.com/100"
      />
    </div>
  );
}

export default App;