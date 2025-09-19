import React, { useState, useEffect } from "react";

function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);


    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "1.5rem" }}>
      {isOnline ? "🟢 You are online" : "🔴 You are offline"}
    </div>
  );
}

export default OnlineStatus;
