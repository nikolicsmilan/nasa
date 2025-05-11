// src/pages/Test/components/ComingSoonCard.jsx
import { FaHourglassHalf } from 'react-icons/fa'; // Vagy más releváns ikon

const ComingSoonCard = ({ name, description }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-800/70 rounded-xl border border-neutral-700 shadow-lg hover:shadow-primary/30 transition-shadow duration-300">
      <FaHourglassHalf className="text-4xl text-amber-500 mb-4 animate-pulse" />
      <h3 className="text-lg font-semibold text-primary mb-2">{name}</h3>
      {description && (
        <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
          {description}
        </p>
      )}
      <p className="text-xl font-bold text-amber-400">Coming Soon...</p>
      <p className="text-xs text-neutral-500 mt-1">(This component is under development)</p>
    </div>
  );
};

export default ComingSoonCard;