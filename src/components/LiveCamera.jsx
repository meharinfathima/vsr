import React, { useRef, useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // backend server

const LiveCamera = () => {
  const videoRef = useRef(null);
  const [subtitle, setSubtitle] = useState("");
  const [isLive, setIsLive] = useState(false);
  const streamRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // receive predictions
    socket.on("prediction", (text) => {
      setSubtitle(text);
    });

    return () => {
      socket.off("prediction");
    };
  }, []);

  const startLive = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      streamRef.current = stream;
      setIsLive(true);

      // start sending frames
      intervalRef.current = setInterval(() => {
        if (videoRef.current) {
          const canvas = document.createElement("canvas");
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          const frameData = canvas.toDataURL("image/jpeg");
          socket.emit("frame", frameData);
        }
      }, 200);
    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  const stopLive = () => {
    // stop interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // stop webcam stream
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    // clear video
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    // reset state
    setIsLive(false);
    setSubtitle("");
  };

  return (
    <section className="flex flex-col items-center mt-8">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-[500px] rounded-lg shadow-lg border border-gray-500"
      />
      <p className="mt-4 text-lg text-[#64dfdf]">
        {isLive ? `Prediction: ${subtitle || "Listening..."}` : "Live stopped"}
      </p>

      <div className="mt-6 flex gap-4">
        {!isLive ? (
          <button
            onClick={startLive}
            className="px-6 py-2 bg-[#64dfdf] text-black font-medium rounded-lg hover:bg-[#4ecaca] transition"
          >
            Start Live
          </button>
        ) : (
          <button
            onClick={stopLive}
            className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
          >
            Stop Live
          </button>
        )}
      </div>
    </section>
  );
};

export default LiveCamera;
