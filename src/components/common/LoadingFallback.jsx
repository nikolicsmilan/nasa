// src/components/common/LoadingFallback.jsx

// Itt akár prop-type validációt is hozzáadhatsz a jövőben.
const LoadingFallback = ({ message = "Loading..." }) => (
    <div className="w-screen h-screen bg-black text-primary flex items-center justify-center text-xl font-mono">
      {message}
    </div>
  );
  
  export default LoadingFallback;