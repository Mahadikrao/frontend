import { useState } from "react";

function Logout() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      // Potentially inform the backend about the logout
      // await axios.post('/api/logout');

      // Clear the JWT token from local storage
      localStorage.removeItem("token");

      // Redirect the user to the login page
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoggingOut(false);
      // Optionally show an error message to the user
    }
  };

  return (
    <div>
      <button onClick={handleLogout} disabled={isLoggingOut}>
        {isLoggingOut ? "Logging Out..." : "Logout"}
      </button>
    </div>
  );
}

export default Logout;
