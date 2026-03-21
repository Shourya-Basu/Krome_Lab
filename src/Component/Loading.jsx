import React from "react";

const Loading = () => {
  const letters = "PROCESSING".split("");
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="relative flex items-center justify-center h-['120px'] scale-200 font-[Poppins] text-[1.6em] font-semibold text-white select-none">
        {/* Letters */}
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-letter"
            style={{ animationDelay: `${0.1 + index * 0.105}s` }}
          >
            {letter}
          </span>
        ))}

        {/* Loader overlay */}
        <div className="absolute inset-0 z-10 loader-mask"></div>
      </div>
    </div>
  );
};

export default Loading;
