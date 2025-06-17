// src/pages/Home/components/SubscribeConsole.jsx - ESZTÉTIKUSABB
import  { useState } from "react";
import axiosInstance from '../../../api/axios';
import { motion } from "framer-motion";
import { subcribeAnimation } from "../../../utils/motion";
import StyledButton from '../../../components/buttons/StyledButton';
const SubscribeConsole = ({ subscribeToggle, setSubscribeToggle }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Betöltés állapot

  const handleClose = () => {
    if (isLoading) return; // Ne zárja be küldés közben
    setSubscribeToggle(false);
    // Reset message after a delay when closing
    setTimeout(() => setMessage(""), 300);
  };

// A handleSubmit függvény a SubscribeConsole.jsx-ben

const handleSubmit = async (event) => {
  event.preventDefault();
  if (isLoading) return;
  setIsLoading(true);
  setMessage('Sending...');

  try {
    const response = await axiosInstance.post('/users/subscribe', { username, email });

    // A backend a 201-es kódot küldi sikeres létrehozáskor ('Created').
    if (response.status === 201) {
      setMessage(response.data.message || "Subscription successful!");
      setUsername("");
      setEmail("");
      // setTimeout(handleClose, 2000); // Opcionális automatikus bezárás
    } else {
      // Ez az ág valószínűleg ritkán fut le, ha a backend helyesen van megírva.
      setMessage(response.data.message || "An unexpected response occurred.");
    }
  } catch (error) {
    console.error("Error during subscription:", error);
    // Az axios hibakezelése: a hibaüzenet az error.response.data.error-ban van,
    // a te backend logikád szerint.
    setMessage(error.response?.data?.error || "An error occurred. Please try again later.");
  } finally {
    setIsLoading(false); // A betöltés állapotot mindenképp állítsuk vissza.
  }
};

  return (
    <motion.div
      variants={subcribeAnimation("right")}
      initial="exit"
      animate={subscribeToggle ? "animate" : "exit"}
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md" // Kicsit erősebb blur/dim
      onClick={handleClose}
    >
      {/* A Panel: Most a témázott panel-gradient hátteret használja */}
      <div
        // Használja a configból a panel stílust!
        className="z-50 bg-panel-gradient rounded-xl p-6 md:p-8 w-full max-w-md shadow-2xl border border-button-theme backdrop-blur-lg" // Használja a témázott keretet is!
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl font-bold text-primary mb-5 text-center drop-shadow-text-theme"> {/* Világító cím */}
          Feliratkozás Értesítésekre
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Input mezők és címkék (maradnak a korábbi stílusok) */}
          <div>
            <label htmlFor="username" className="block text-primary/80 text-sm font-bold mb-2">
              Felhasználónév (Opcionális):
            </label>
            <input
              type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}
              className="shadow-inner appearance-none border border-neutral-600 rounded w-full py-2 px-3 bg-neutral-800/70 text-neutral-100 leading-tight focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 placeholder-neutral-500"
              placeholder="pl. AstroFan"
              disabled={isLoading}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-primary/80 text-sm font-bold mb-2">
              Email Cím:*
            </label>
            <input
              type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="shadow-inner appearance-none border border-neutral-600 rounded w-full py-2 px-3 bg-neutral-800/70 text-neutral-100 leading-tight focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 placeholder-neutral-500"
              placeholder="nev@email.com"
              disabled={isLoading}
            />
          </div>

          {/* A Feliratkozás gomb (StyledButton) */}
          <StyledButton
            type="submit"
            variant="accent" // Marad az accent stílus
            // A className most már csak extra finomításokat ad hozzá
            className="w-full mt-2" // Egyszerűbb, a padding/méret a komponensből jön
            disabled={isLoading}
          >
            {/* Betöltésjelző hozzáadása */}
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Feliratkozás'
            )}
          </StyledButton>

          {/* Üzenet */}
          {message && !isLoading && (
             <div className={`text-sm mt-3 p-3 rounded text-center ${message.toLowerCase().includes('successful') ? 'bg-green-900/60 text-green-300 border border-green-700/50' : 'bg-red-900/60 text-red-300 border border-red-700/50'}`}>
               {message}
             </div>
           )}
        </form>
        {/* Mégsem gomb */}
        <button
            onClick={handleClose}
            className="mt-5 w-full text-center align-baseline font-bold text-sm text-primary/60 hover:text-primary disabled:opacity-50 transition-colors"
            aria-label="Mégsem"
            disabled={isLoading}
          >
            Mégsem
        </button>
      </div>
    </motion.div>
  );
};

export default SubscribeConsole;
