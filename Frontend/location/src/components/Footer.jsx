import React, { useEffect, useState } from "react";
import axios from "axios";

function Footer() {
  const [location, setLocation] = useState({ city: "", country: "", pincode: "" });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await axios.get(`https://maps.devsecit.com/introduce?lat=${latitude}&lon=${longitude}`);
        setLocation(response.data);
      } catch (error) {
        console.error("Error fetching location", error);
      }
    });
  }, []);

  return (
    <footer>
      <p>City: {location.city}</p>
      <p>Country: {location.country}</p>
      <p>Pincode: {location.pincode}</p>
    </footer>
  );
}

export default Footer;
