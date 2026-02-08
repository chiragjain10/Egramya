import { useEffect, useState } from "react";

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2200); // 2.2s preloader

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F9F8F6] transition-opacity duration-700">
      <div className="flex flex-col items-center text-center px-6">

        {/* Logo */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl font-bold text-[#0ea771]">
            Egramya
          </h1>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-stone-500">
            Village Dairy Counsellor Program
          </p>
        </div>

        {/* Animation */}
        <div className="relative w-[140px] h-[140px] mb-10">

          {/* Progress Ring */}
          <svg
            viewBox="0 0 140 140"
            className="absolute inset-0 w-full h-full -rotate-90"
          >
            <circle
              cx="70"
              cy="70"
              r="65"
              fill="none"
              stroke="#0ea771"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="360"
              strokeDashoffset="360"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="360"
                to="0"
                dur="2.2s"
                fill="freeze"
                keyTimes="0;0.7;1"
                values="360;90;0"
              />
            </circle>
          </svg>

          {/* Dairy Icon */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 m-auto w-16 h-16 text-[#0ea771]"
          >
            {/* Milk Drop */}
            <path
              d="M50,20 C55,20 65,30 65,40 C65,55 50,70 50,70 C50,70 35,55 35,40 C35,30 45,20 50,20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="150"
              strokeDashoffset="150"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="150"
                to="0"
                dur="1.5s"
                begin="0.4s"
                fill="freeze"
              />
            </path>

            {/* Leaf */}
            <path
              d="M50,40 C55,35 65,30 70,35 C75,40 75,50 70,55 C65,60 55,65 50,60 C45,65 35,60 30,55 C25,50 25,40 30,35 C35,30 45,35 50,40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="120"
              strokeDashoffset="120"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="120"
                to="0"
                dur="1.5s"
                begin="0.8s"
                fill="freeze"
              />
            </path>
          </svg>
        </div>

        {/* Loading Text */}
        <p className="text-xs uppercase tracking-[0.3em] text-stone-500 animate-pulse">
          Preparing the Program
        </p>

      </div>
    </div>
  );
};

export default Preloader;
