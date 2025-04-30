import { useSave } from '../../hooks/use-saveuser';
import { MyDataContext } from '../../context/DataContext';
// Import styles from its new location (assuming it's next to localdata.js in locales)
import { styles } from '../../locales/styles';

const StyleConsole = () => {
  const { saveUser } = useSave();
  const { setChoosenStyle, users, playSoundClick } = MyDataContext();

  const handleClick = (item) => {
    if (item && item.title) {
      saveUser("style", item.title);
      setChoosenStyle(item.title);
      playSoundClick();
    } else {
      console.error("Clicked item is missing title:", item);
    }
  };

  return (
    <div className="flex flex-wrap border-0 h-32 mx-0 w-full  justify-center items-center p-2">
      {styles.map((item, index) => {
        if (!item || !item.title || !item.iconComponent || !item.iconData) {
          console.warn(`Style item at index ${index} is missing required properties.`, item);
          return null;
        }

        const IconComponent = item.iconComponent;
        const isActive = users?.style === item.title;

        return (
          <div
            key={item.title || index}
            onClick={() => handleClick(item)}
            // Módosított className:
            className={`flex flex-col items-center justify-center group relative
                       border-0 border-red-400  rounded-lg m-2 h-24 w-24 
                       text-primary cursor-pointer transition-all duration-200 ease-in-out
                      
                       ${isActive
                         ? "bg-primary text-black shadow-[0_0_15px_theme('colors.primary')] scale-105" // Erős aktív kiemelés
                         : "hover:bg-primary/20 hover:shadow-[0_0_10px_theme('colors.primary/50%')]" // Finomabb hover
                       }
                       
                      `}
          >
            {/* Ikon - változatlan */}
            {typeof IconComponent === 'function' || typeof IconComponent === 'object' ? (
                 <IconComponent {...item.iconData} />
            ) : (
                 <span className="text-red-500 text-xs">?</span>
            )}

            {/* Cím - változatlan */}
            <div className="absolute text-center text-md z-50 text-white group-hover:text-white text-neutral-300 transition-colors duration-150">
              {item.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StyleConsole;