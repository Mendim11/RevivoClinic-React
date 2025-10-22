import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g. waiting for assets)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds — adjust if needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Hide preloader after timeout

  return (
    <div className="preloader">
      <div className="loader">
        <div className="ytp-spinner">
          <div className="ytp-spinner-container">
            <div className="ytp-spinner-rotator">
              <div className="ytp-spinner-left">
                <div className="ytp-spinner-circle"></div>
              </div>
              <div className="ytp-spinner-right">
                <div className="ytp-spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
