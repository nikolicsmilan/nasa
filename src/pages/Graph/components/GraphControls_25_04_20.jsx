import Super3dConsole from "../../../components/consoles/views/Super3dConsole"; // Ellenőrizd az elérési utat!

// Fogadja a config propot is!
const GraphControls = ({ graphdatasource, handleClick, config }) => {
  return (
    // A külső container stílusa (pl. padding)
    <div className="flex flex-col p-2 space-y-4"> {/* Hozzáadtam space-y-4-et a csoportok közötti térközhöz */}

      {/* Végigmegyünk a graphdatasource tömbön (ami tartalmazza a csoportokat) */}
      {graphdatasource.map((group, index) => (
        // Minden csoportnak saját div-je
        <div key={group.name || index} className="flex flex-col"> {/* Használjuk a group.name-et key-nek, ha van */}

          {/* === CSOPORT CÍM ÉS IKON MEGJELENÍTÉSE === */}
          {(group.description || group.icon) && ( // Csak akkor jelenítjük meg, ha van leírás vagy ikon
            <h3 className="text-lg font-semibold mb-2 text-primary flex items-center gap-2 px-2"> {/* Cím stílusa */}
              {group.icon && <group.icon />} {/* Ikon (ha van) */}
              {group.description || group.name} {/* Leírás (vagy név, ha nincs leírás) */}
            </h3>
          )}
          {/* ======================================= */}

          {/* A Super3dConsole komponens renderelése az adott csoport adataival */}
          {/* Ennek már nem kell tudnia a csoport címéről, csak a gombokról */}
          <Super3dConsole
            handleClick={handleClick}
            nameconsole={group.name}   // A csoport neve (pl. 'datatype')
            data={group.data}        // A csoport gombjainak tömbje
            config={config}          // Az aktuális config state
            // A description propot innen kivesszük, mert fentebb jelenik meg
          />
        </div>
      ))}
    </div>
  );
};

export default GraphControls;
