// src/locales/panel-contents/HomePanelContent.jsx

import { NavLink } from 'react-router-dom';

// Ez a komponens kapja propként a panelData objektumot a navigationData-ból
const HomePanelContent = ({ title, description, imageUrl, submenus }) => {
  return (
    <div className="flex gap-5 text-white p-5 border-0 w-full justify-between"> {/* Fő flex konténer */}

      {/* Bal oldal: Szövegek és Almenük */}
      <div className=" flex flex-1 flex-col border-0">
        <h3 className="text-lg font-semibold text-primary mb-2">
          {title || "Home Panel"} {/* Cím (ha átadjuk, bár a navData-ban van) */}
        </h3>
        <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
          {description || "Nincs leírás megadva."}
        </p>

        {/* Almenük (ha vannak) */}
        {submenus && submenus.length > 0 && (
          <div className="mt-auto pt-3 border-t border-primary/20"> {/* Alulra igazítás és elválasztó */}
            <h4 className="text-sm font-medium text-primary mb-1.5">
              Kapcsolódó linkek:
            </h4>
            <ul className="space-y-1">
              {submenus.map((submenu, index) => (
                <li key={index}>
                  <NavLink
                    to={submenu.route}
                    className="text-sm text-neutral-200 hover:text-white hover:underline transition-colors"
                  >
                    {submenu.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Jobb oldal: Kép */}
      {imageUrl && ( // Csak akkor jelenítjük meg, ha van kép URL
        <div className="w-1/2 flex  border-0">
          <img
            src={imageUrl}
            alt={`${title || 'Panel'} illusztráció`}
           className="w-full h-full object-cover rounded-lg shadow-md border border-neutral-700"
          />
        </div>
      )}

    </div>
  );
};

export default HomePanelContent;