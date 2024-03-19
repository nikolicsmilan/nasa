import React from "react";
import { NavLink,useNavigation  } from "react-router-dom";
import { MyAudioContext } from "../../context/AudioContext";
import clickSound from "../../assets/sound/click.mp3";

const Consoles = ({ menupoint }) => {
  const { sound } = MyAudioContext();
  const navigation = useNavigation();
  const playSound = () => {
    if (sound && sound.click) {    
    sound.click.currentTime = 0;
    sound.click.volume = 0.2;
    sound.click.play()
    }
  };
  
  const playSoundAndNavigate = (link) => {
    if (sound && sound.click) {    
      sound.click.currentTime = 0;
      sound.click.volume = 0.2;
      sound.click.play();

      setTimeout(() => {
        navigation.navigate(link); // Navigálás az új oldalra
      }, sound.click.duration * 1000); // Várunk a hang lejátszására, mielőtt továbbnavigálunk
    }
  };
 
  return (
    <div
      className="border-0 p-5 w-full flex 
    flex-wrap justify-between overflow-y-auto  h-80 "
    >
      {" "}
    
      {menupoint &&
        menupoint?.map((item) => (
          <NavLink
          //  onClick={playSound}
          onClick={() => playSoundAndNavigate(item.link)}
            key={item?.title}
            to={item?.link}
            className={({ isActive }) => `${isActive ? "mynavlink" : ""}   `}
          >
            <div
              key={item?.id}
              className={`shadowactive customshadow3
             cursor-pointer rounded relative flex-col my-1 w-40 lg:w-48 md:w-40
             h-14  border-0 border-orange-400`}
            >
              <div
                className="customshadow2 rounded
             w-40 md:w-40 lg:w-48 h-full text-white shadow-2xl border-0 
              bg-sky-400 md:opacity-10 opacity-10 mt-[0px] z-40"
              ></div>

              <div
                className="customshadow2 rounded
            text-base opacity-100 flex h-14
             border-purple-400 shadow-2xl items-center 
              border-0 bg-dark-800 z-20 mt-[-55px]  "
              >
                <p className="mx-2 text-sky-200"> {<item.icon />}</p>
                <h2 className="text-sky-200 opacity-100">{item?.title}</h2>
              </div>
            </div>
          </NavLink>
        ))}
    </div>
  );
};

export default Consoles;