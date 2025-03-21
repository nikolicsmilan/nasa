import React from 'react';
import { Link } from 'react-router-dom';

const NotificationButton = () => {
  return (
    <div className='border-0 text-center w-96'>
      <p className="text-md text-primary mb-2 px-5">
      Szeretnél SMS-t kapni veszély esetén?
      </p>
      <Link 
        to="/subscription" 
        className="w-80 my-5 inline-block bg-green-500
         hover:bg-green-500 transition-all duration-300
          text-white font-bold py-3 px-6 rounded-lg shadow-lg uppercase"
      >
        Ingyenes értesítést kérek!
      </Link>
    </div>
  );
};

export default NotificationButton;