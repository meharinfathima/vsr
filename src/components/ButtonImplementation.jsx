import React, { useState } from "react";

const ButtonImplementation = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPrediction("");
  };

  const handlePredict = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setPrediction("");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setPrediction(data.prediction || data.error);
    } catch (err) {
      setPrediction("Backend not reachable");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-[#64dfdf] px-6 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        Upload Your Silent Speech Video
      </h1>

      <p className="text-[1.5rem] text-gray-300 mb-8 text-center max-w-2xl">
        Choose a video file to begin processing with our silent speech recognition system.
      </p>

      {/* File Input */}
      <label className="bg-black text-gray-200 border border-gray-200 px-4 py-2 rounded-lg cursor-pointer">
        Choose a file
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {/* File Name */}
      {selectedFile && (
        <p className="mt-4 text-gray-300 text-center">
          Selected file:{" "}
          <span className="text-[#64dfdf] font-medium">
            {selectedFile.name}
          </span>
        </p>
      )}

      {/* Predict Button */}
      {selectedFile && (
        <button
          onClick={handlePredict}
          disabled={loading}
          className="mt-6 px-6 py-3 rounded-full bg-[#64dfdf] text-black font-semibold hover:opacity-90 transition"
        >
          {loading ? "Predicting..." : "Predict Speech"}
        </button>
      )}

      {/* Prediction Output */}
      {prediction && (
        <div className="mt-8 px-6 py-4 bg-white/10 rounded-lg text-xl text-center">
          Prediction:{" "}
          <span className="font-semibold text-[#64dfdf]">
            {prediction}
          </span>
        </div>
      )}
    </section>
  );
};

export default ButtonImplementation;
