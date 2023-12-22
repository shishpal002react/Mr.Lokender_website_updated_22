import React from 'react'
import Navbar from '../Homepage/Navbar/Navbar';
import NavbarCategory from '../Homepage/NavbarCategory/NavbarCategory';


const Profile = () => {
  return (
    <div>
      <Navbar />
      <NavbarCategory />
      <div style={{marginLeft: "20px"}}>

      <h1 style={{fontSize: "24px", margin: "20px 0px"}}>Your Registered Phone Number</h1>
      <div>{JSON.parse(localStorage.getItem("userNumber"))}</div>
      </div>
    </div>
  )
}

export default Profile;
