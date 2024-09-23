import React, { useEffect, useState } from 'react';

const LoadingOverlay = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100; // Ensure it caps at 100%
        }
        return prev + (100 / 30); // Increment by 100/30 every 100 ms (3 seconds total)
      });
    }, 100);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="flex justify-center mb-8">
        <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOnJebrruomwXnDn0ees4KHVKsXOgEg_Ctzw&s"}
          alt="Teacher and Student"
          className="w-48 h-48"
        />
      </div>

      <div className="w-2/3 h-1 bg-gray-300 rounded-full mb-4">
        <div
          className="h-full bg-black rounded-full"
          style={{ width: `${progress}%` }} // Use dynamic progress
        ></div>
      </div>

      <div className="text-lg text-black">
        Generating questions...
      </div>
    </div>
  );
};

export default LoadingOverlay;
