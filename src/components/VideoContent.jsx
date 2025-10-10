import React from "react";
import { Play, Info } from "lucide-react";

const VideoContent = ({ title, overview }) => {
  return (
    <div className="flex flex-col justify-center text-white">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug drop-shadow-md">
        {title}
      </h1>
      <p className="text-xs md:text-sm lg:text-base max-w-md text-gray-200 leading-relaxed opacity-90">
        {overview}
      </p>

      <div className="flex gap-3 pt-4">
        <button className="flex items-center gap-2 bg-white text-black font-medium px-4 py-1.5 md:px-5 md:py-2 rounded-sm hover:bg-opacity-80 transition-all">
          <Play className="w-4 h-4 fill-black" />
          <span className="text-sm md:text-base">Play</span>
        </button>

        <button className="flex items-center gap-2 bg-gray-500/50 hover:bg-gray-500/70 text-white font-medium px-4 py-1.5 md:px-5 md:py-2 rounded-sm transition-all">
          <Info className="w-4 h-4" />
          <span className="text-sm md:text-base">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoContent;
