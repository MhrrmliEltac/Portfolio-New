import React from "react";

const UiVerseButton: React.FC = () => {
  return (
    <a
      href="https://github.com/user-attachments/files/19247030/Resume.-.Eltac.Maharramli.pdf"
      download="Resume.-.Eltac.Maharramli.pdf"
      className="max-w-[182px] w-full max-h-full h-14"
    >
      <button className="cursor-pointer flex gap-5 justify-center items-center bg-[#F78F42] rounded-[56px] max-w-[182px] w-full max-h-full h-14 px-3 py-2 text-white tracking-wider shadow-xl hover:bg-[#F78F42] hover:scale-105 duration-500 hover:ring-1">
        <span className="text-[#131313] text-[18px] font-medium">CV</span>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 animate-bounce text-[#131313]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </button>
    </a>
  );
};

export default UiVerseButton;
