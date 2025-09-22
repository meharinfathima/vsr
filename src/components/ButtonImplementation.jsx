import React, { useState } from 'react'

const ButtonImplementation = () => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-[#64dfdf] px-6 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Upload Your Silent Speech Video</h1>
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

      {/* File Name Display */}
      {selectedFile && (
        <p className="mt-4 text-gray-300 text-center">
          Selected file: <span className="text-[#64dfdf] font-medium">{selectedFile.name}</span>
        </p>
      )}
    </section>
  )
}

export default ButtonImplementation