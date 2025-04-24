import { useCallback } from 'react';

const Super3dConsole = ({ nameconsole, data, handleClick, config }) => {

  // JavaScript a glowy effekthez (szükséges a --x, --y változókhoz)
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  }, []);

  // Aktivitás ellenőrzése (változatlan)
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
    <div
      className={`glassmorphis relative z-10 rounded border-600 text-dark flex flex-col items-start w-80 m-0 p-0 border-0`}
    >
      <div
        className="flex flex-row flex-wrap text-2xl my-0 relative z-10 border-0"
      >
        {data.map((item, index) => {
          // Aktív-e a gomb?
          const isActive = isButtonActive(nameconsole, item.title, config);

          // === VÁLTOZTATÁS ITT ===
          // Az alap elrendezési osztályok
          const baseLayoutClasses = 'flex flex-col w-20 h-16 justify-center items-center group border-0 p-1 rounded m-2 cursor-pointer';
          // A glow effekt osztály az állapot alapján
          const glowEffectClass = isActive ? 'glowy-button-6' : 'glowy-button-5';
          // Teljes osztálylista a containerhez
          const buttonContainerClasses = `${baseLayoutClasses} ${glowEffectClass}`;
          // =======================

          // Szöveg és ikon stílusok (ezeket is testreszabhatod)
          const textClasses = `
            text-center group-hover:block text-sm rounded p-1 z-50
             ${isActive
               ? 'text-white font-bold' // Aktív: Fehér, vastagabb
               : 'text-primary group-hover:text-white' // Inaktív: türkiz, hoverre fehér
             }
          `;
          const iconClasses = isActive ? 'text-white' : 'text-primary'; // Aktív: Fehér ikon

          return (
            <div
              key={index}
              onClick={() => handleClick(nameconsole, item)}
              className={buttonContainerClasses} // Most már helyesen vált a glowy osztályok között
              onMouseMove={handleMouseMove} // Egérmozgás figyelése az effekthez
            >
              <div className={iconClasses}>
                {item.icon && <item.icon />}
              </div>
              <div className={textClasses}>
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Super3dConsole;
