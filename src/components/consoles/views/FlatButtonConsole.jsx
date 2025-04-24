import { motion } from 'framer-motion';

// Ez a komponens fogadja ugyanazokat a propokat, mint a Super3dConsole
const FlatButtonConsole = ({ nameconsole, data, handleClick, config }) => {

  // Segédfüggvény az aktivitás ellenőrzésére
  const isButtonActive = (groupName, itemTitle, currentConfig) => {
    if (!currentConfig) return false;
    switch (groupName) {
      case 'datatype':
        return currentConfig.dataType === itemTitle;
      case 'graph':
        return currentConfig.graphType === itemTitle;
      case 'filter':
        if (itemTitle === 'inc') return currentConfig.sortOrder === 'asc';
        if (itemTitle === 'desc') return currentConfig.sortOrder === 'desc';
        return false;
      default:
        return false;
    }
  };

  return (
    // Nincs külső glassmorphism vagy fix szélesség, alkalmazkodik a containerhez
    <div className="w-full">
      {/* Gombok 2 oszlopos gridben */}
      <div className="grid grid-cols-2 gap-2">
        {data.map((item, index) => {
          const isActive = isButtonActive(nameconsole, item.title, config);

          // Lapos gomb stílusai
           const buttonClasses = `
            flex items-center justify-center p-2 rounded transition-colors duration-200 ease-in-out
            border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full h-10  /* Magasság beállítása */
            ${isActive
              ? 'bg-primary text-neutral-900 border-primary shadow-md hover:bg-primary/90 font-bold' // Aktív
              : 'bg-neutral-700 border-neutral-600 text-neutral-300 hover:bg-neutral-600 hover:border-neutral-500' // Inaktív
            }
          `;

          return (
            <motion.button
              key={item.title + '-' + index} // Biztonságosabb key
              onClick={() => handleClick(nameconsole, item)}
              className={buttonClasses}
              whileHover={{ scale: isActive ? 1 : 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {item.icon && <item.icon className="mr-1.5 text-base" />}
              {item.title}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default FlatButtonConsole;