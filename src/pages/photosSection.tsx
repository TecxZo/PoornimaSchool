import React, { useState, useEffect } from "react";
import image01 from "../assets/SchoolPhotos/597812d4-0029-414f-9f7d-ca78048344d2.jpg";
import image02 from "../assets/SchoolPhotos/DSC07686.jpg";
import image03 from "../assets/SchoolPhotos/DSC07687.jpg";
import image04 from "../assets/SchoolPhotos/DSC07688.jpg";
import image05 from "../assets/SchoolPhotos/DSCN6678.jpg";
import image06 from "../assets/SchoolPhotos/DSCN6679.jpg";

import video01 from "../assets/vido01.mp4";

interface MediaItem {
  type: "image" | "video";
  source: string;
}

const PhotoGallery = () => {
  const media: MediaItem[] = [
    { type: "image", source: image01 },
    { type: "image", source: image02 },
    { type: "image", source: image03 },
    { type: "image", source: image04 },
    { type: "image", source: image05 },
    { type: "image", source: image06 },

    // Add videos like this
    { type: "video", source: video01 },
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Open preview
  const openPreview = (index: number) => setCurrentIndex(index);

  // Close preview
  const closePreview = () => setCurrentIndex(null);

  // Next item
  const nextItem = (e?: any) => {
    e?.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % media.length);
    }
  };

  // Previous item
  const prevItem = (e?: any) => {
    e?.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + media.length) % media.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex === null) return;

      if (e.key === "ArrowRight") nextItem();
      if (e.key === "ArrowLeft") prevItem();
      if (e.key === "Escape") closePreview();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <>
      {/* Main Gallery */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          School Media Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {media.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => openPreview(index)}
            >
              {item.type === "image" ? (
                <img
                  src={item.source}
                  className="w-full h-64 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <video
                  src={item.source}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                  muted
                  playsInline
                  preload="metadata"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Preview */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 animate-fadeIn"
          onClick={closePreview}
        >
          {/* Prev button */}
          <button
            onClick={prevItem}
            className="absolute left-5 text-white text-4xl font-bold px-4 py-2 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition"
          >
            ‹
          </button>

          {/* Media Preview */}
          {media[currentIndex].type === "image" ? (
            <img
              src={media[currentIndex].source}
              className="max-w-4xl max-h-[90vh] rounded-lg shadow-2xl animate-zoomIn"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={media[currentIndex].source}
              className="max-w-4xl max-h-[90vh] rounded-lg shadow-2xl animate-zoomIn"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {/* Next button */}
          <button
            onClick={nextItem}
            className="absolute right-5 text-white text-4xl font-bold px-4 py-2 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition"
          >
            ›
          </button>

          {/* Close */}
          <button
            onClick={closePreview}
            className="absolute top-5 right-5 text-white text-3xl bg-black bg-opacity-40 px-3 py-1 rounded-full hover:bg-opacity-70 transition"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
