"use client";

import { useEffect, useRef, useState } from "react";

function UploadCloudIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7 text-slate-400"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.338-2.32 3.75 3.75 0 0 1 4.089 4.025A4.5 4.5 0 0 1 17.25 19.5H6.75Z"
      />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
      />
    </svg>
  );
}

interface UploadZoneProps {
  onFileSelected: (file: File) => void;
  initialMode?: "camera" | "file";
}

export default function UploadZone({ onFileSelected, initialMode }: UploadZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialMode === "camera") {
      cameraInputRef.current?.click();
    }
  }, [initialMode]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) onFileSelected(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileSelected(file);
  };

  return (
    <div
      role="region"
      aria-label="Upload zone"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`rounded-3xl border-2 border-dashed p-10 flex flex-col items-center gap-6 transition-colors duration-200 ${
        isDragOver
          ? "border-green-400 bg-green-50"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleFileChange}
        aria-label="Upload menu photo"
        tabIndex={-1}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="sr-only"
        onChange={handleFileChange}
        aria-label="Take menu photo"
        tabIndex={-1}
      />

      <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center">
        <UploadCloudIcon />
      </div>

      <div className="text-center">
        <p className="text-base font-semibold text-slate-900">
          {isDragOver ? "Drop your menu here" : "Drop your menu photo here"}
        </p>
        <p className="text-sm text-slate-400 mt-1">PNG, JPG, HEIC up to 20 MB</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <button
          type="button"
          onClick={() => cameraInputRef.current?.click()}
          className="flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 active:scale-[0.97] transition-all w-full sm:w-auto"
        >
          <CameraIcon />
          Take Photo
        </button>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center justify-center gap-2 h-12 px-6 rounded-full border-2 border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white active:scale-[0.97] transition-all w-full sm:w-auto"
        >
          Upload Photo
        </button>
      </div>
    </div>
  );
}
