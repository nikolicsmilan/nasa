

import { useState } from 'react'; // useState importálása
import Super3dConsole from "../../../components/consoles/views/Super3dConsole"; // Eredeti komponens
// Majd importáljuk az újat is, ha kész:
 import FlatButtonConsole from "../../../components/consoles/views/FlatButtonConsole";
import { BsSquare, BsViewStacked } from 'react-icons/bs'; // Példa ikonok a váltóhoz

const GraphControls = ({ graphdatasource, handleClick, config }) => {
  // 1. State a nézetváltáshoz ('square' vagy 'rectangle')
  const [viewMode, setViewMode] = useState('square'); // Alapértelmezett a négyzet

  return (
    <div className="flex flex-col p-2 space-y-2 w-80"> {/* Kisebb térköz a csoportok között */}

      {/* 2. Layout Switcher Gombok */}
      <div className="flex items-center justify-end space-x-2 mb-2 px-2">
        <button
          onClick={() => setViewMode('square')}
          title="Square View"
          className={`p-1 rounded transition-colors ${
            viewMode === 'square' ? 'bg-primary text-neutral-900 ring-1 ring-primary' : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
          }`}
        >
          <BsSquare /> {/* Négyzet ikon */}
        </button>
        <button
          onClick={() => setViewMode('rectangle')}
          title="Rectangle View"
           className={`p-1 rounded transition-colors ${
            viewMode === 'rectangle' ? 'bg-primary text-neutral-900 ring-1 ring-primary' : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
          }`}
        >
          <BsViewStacked /> {/* Téglalap/Stack ikon */}
        </button>
      </div>

      {/* Gombcsoportok renderelése */}
      {graphdatasource.map((group, index) => (
        <div key={group.name || index} className="flex flex-col">
          {/* Csoport Cím és Ikon (változatlan) */}
          {(group.description || group.icon) && (
            <h3 className="text-lg font-semibold mb-1 text-primary flex items-center gap-2 px-2"> {/* Kisebb mb */}
              {group.icon && <group.icon />}
              {group.description || group.name}
            </h3>
          )}

          {/* 4. Feltételes Renderelés */}
          <div className="mt-1"> {/* Kis térköz a cím és a gombok között */}
            {viewMode === 'square' ? (
              // Négyzet nézet: Eredeti Super3dConsole
              <Super3dConsole
                handleClick={handleClick}
                nameconsole={group.name}
                data={group.data}
                config={config}
              />
            ) : (
              
               <FlatButtonConsole
                handleClick={handleClick}
                 nameconsole={group.name}
                data={group.data}
                config={config}
               />
            
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GraphControls;