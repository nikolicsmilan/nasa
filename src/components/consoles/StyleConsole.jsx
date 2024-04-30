import React from "react";
import { useSave } from "../../hooks/use-saveuser";
import { MyAudioContext } from "../../context/AudioContext";
import { styles } from "../../locales/localdata";
//kell egy természetben is látszó színséma!!!!
const StyleConsole = ({ users }) => {
  const { saveUser } = useSave();
  const { playSoundClick } = MyAudioContext();
  console.log(users)

/*
  const chooseString = (kapot) => {
    switch (kapot) {
      case 1:
        return "Első string";
      case 2:
        return "Második string";
      case 3:
        return "Harmadik string";
      default:
        return "Nincs ilyen string";
    }
  };*/
const selectedStyle= DUMMY_STYLES.find((color)=>color.id ===users.style)

// Miért lesz ez rosz mert itt még mindig csak helyben van
//komnponensenként kell
//ezt beteheteem volna a localdata paamétereként is.
  return (
    <div>
      <div
        className="p-5 lg:p-0 w-full flex lg:items-center lg:justify-center
    flex-wrap justify-between overflow-y-auto h-48 lg:h-96"
      >
        {styles?.map((item) => (
          <div
            key={item.title}
            onClick={() => {
              //  setSettings(item?.title);
              saveUser("style", item?.title);
              playSoundClick();
            }}
            className={`shadowactive customshadow3 
          cursor-pointer rounded relative flex-col my-1 w-40 lg:w-48 md:w-40
          h-14  border-0 border-lime-400`}
          >
            <div
              className="customshadow2 rounded
          w-40 md:w-40 lg:w-48 h-full text-white shadow-2xl border-0 
           bg-sky-400 md:opacity-10 opacity-10 mt-[0px] z-40"
            ></div>

            <div
              className="customshadow2 rounded
         text-xl opacity-100 flex h-14
          border-purple-400 shadow-2xl items-center 
           border-0 bg-dark-800 z-20 mt-[-55px]  "
            >
              <p className="mx-2 text-sky-200"> {<item.icon />}</p>
              <h2 className="text-sky-200 opacity-100">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
      A stílus: {users?.style} tt

      selectedStyle: {selectedStyle}
    </div>
  );
};

export default StyleConsole;

/* onClick={() => {
          saveUser("style", "green");
        }} */
