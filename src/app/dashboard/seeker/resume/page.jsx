"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiUpload, FiFileText, FiTrash2, FiDownload } from "react-icons/fi";

export default function ResumePage() {
  const [file, setFile] = useState(null);

  // fake existing resume (later API use korba)
  const [resumeUrl] = useState("/sample-resume.pdf");

  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] p-6">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-[#3B2A1A]">
          My Resume
        </h1>
        <p className="text-[#7A6A55] mt-2">
          Upload, update and manage your resume
        </p>
      </motion.div>

      {/* Upload Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-[#E5D5B8] rounded-3xl p-8 shadow-sm"
      >
        <label className="block border-2 border-dashed border-[#D4A64F] rounded-2xl p-10 text-center cursor-pointer hover:bg-[#F8E8C4]/30 transition">
          
          <FiUpload className="mx-auto text-4xl text-[#C8932E]" />

          <p className="mt-4 font-semibold text-[#3B2A1A]">
            Upload Your Resume
          </p>

          <p className="text-sm text-[#7A6A55] mt-1">
            PDF, DOC, DOCX supported
          </p>

          <input
            type="file"
            className="hidden"
            onChange={handleUpload}
          />
        </label>

        {/* Selected file preview */}
        {file && (
          <div className="mt-6 flex items-center justify-between bg-[#F8F5EF] p-4 rounded-xl border border-[#E5D5B8]">
            
            <div className="flex items-center gap-3">
              <FiFileText className="text-[#C8932E]" />
              <span className="text-[#3B2A1A] font-medium">
                {file.name}
              </span>
            </div>

            <button className="text-red-500 hover:text-red-600">
              <FiTrash2 />
            </button>

          </div>
        )}
      </motion.div>

      {/* Current Resume */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 bg-white border border-[#E5D5B8] rounded-3xl p-6"
      >
        <h2 className="text-xl font-bold text-[#3B2A1A] mb-4">
          Current Resume
        </h2>

        <div className="flex items-center justify-between bg-[#F8F5EF] p-4 rounded-xl border">
          
          <div className="flex items-center gap-3">
            <FiFileText className="text-[#C8932E]" />
            <span className="text-[#3B2A1A]">
              resume.pdf
            </span>
          </div>

          <div className="flex gap-3">
            
            <a
              href={resumeUrl}
              target="_blank"
              className="flex items-center gap-1 text-[#C8932E] hover:text-[#A87416]"
            >
              <FiDownload />
              View
            </a>

            <button className="text-red-500 hover:text-red-600">
              <FiTrash2 />
            </button>

          </div>

        </div>
      </motion.div>

      {/* Tips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 text-sm text-[#7A6A55]"
      >
        💡 Tip: A strong resume increases your job chances by 3x
      </motion.div>

    </div>
  );
}