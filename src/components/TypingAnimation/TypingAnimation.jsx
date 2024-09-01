import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingAnimation = ({ customcontent }) => {
  const [text, setText] = useState("");
  const [newContent, setNewContent] = useState(customcontent); // Új állapot a változó szövegnek


  useEffect(() => {
    let timer;
    let currentIndex = 0;

    const typeNextCharacter = () => {
      timer = setTimeout(() => {
        const content = newContent || ""; // Használjuk az új szöveget, ha van, különben az eredeti tartalmat
        setText(content.substring(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex < content.length) {
          typeNextCharacter();
        }
      }, 50);
    };

    typeNextCharacter();

    return () => {
      clearTimeout(timer);
    };
  }, [newContent]); // Figyeljük az új szöveg változást is
  useEffect(() => {
    setNewContent(customcontent);
  }, [customcontent]);
  return (
    <>
     
        {text}
      
    </>
  );
};

export default TypingAnimation;