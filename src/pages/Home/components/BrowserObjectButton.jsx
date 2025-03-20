import React from 'react';
import { Link } from 'react-router-dom';

const BrowserObjectButton = () => {
  return (
    <div className='text-center w-full md:w-96 my-0'>
      <Link 
        to="/objects" 
        className="w-80 inline-block bg-600
         hover:bg-red-600 text-white 
         font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl 
         transition-all duration-300 ease-in-out uppercase"
      >
       Aszteroida info
      </Link>
    </div>
  );
};

export default BrowserObjectButton;