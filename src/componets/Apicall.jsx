import { useEffect, useState } from "react";
import axios from "axios";
import Logout from "./Logout";

function Apicall() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Move this inside useEffect
    console.log(token);

    if (token) {
      axios
        .get("https://backend-4-k5vs.onrender.com/protected", {
          headers: {
            Authorization: token, // Assuming token stored with "Bearer " prefix
          },
        })
        .then((response) => {
          setData(response.data); // Handle the response data
        })
        .catch((error) => {
          console.error("Error:", error.response || error);
        });
    }
  }, []); // Dependency array is empty to only run once at component mount

  return (
    <div>
      {data ? (
        <div>
          <p>Message: {data.message}</p>
          <p>User: {data.user && data.user.username}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Logout />
    </div>
  );
}

export default Apicall;
