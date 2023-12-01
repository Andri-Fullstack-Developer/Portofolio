import { useRouter, CSSProperties } from "next/router";
import React, { useEffect, useState } from "react";

import { PropagateLoader } from "react-spinners";

const Loading = () => {

  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      // setShowLoading(false);
      router.push("./Home");
    }
  }, [countdown, router]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* {countdown > 0 ? <div>Countdown: {countdown}</div> : null} */}
      {/* {countdown === 0 ? <div>Loading...</div> : null} */}

      <div className="sweet-loading">
        <PropagateLoader color="#F7FAF9" />
      </div>
    </div>
  );
};

export default Loading;
