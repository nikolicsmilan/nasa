/*import React from 'react';
import { Link } from 'react-router-dom';

const NotificationButton = () => {
  return (
    <div className='border-0 text-center w-96'>
      <p className="text-sm text-primary mb-2">
        Szeretnél azonnali értesítést kapni SMS-ben, ha egy potenciálisan veszélyes aszteroida közeledik a Földhöz?
      </p>
      <Link to="/subscription" className="inline-block bg-success hover:scale-x-105 text-white font-bold py-2 px-4 rounded">
        Értesítést kérek
      </Link>
    </div>
  );
};

export default NotificationButton;*/

import React from 'react';
import { Link } from 'react-router-dom';

const NotificationButton = () => {
  return (
    <div className='border-0 text-center w-96'>
      <p className="text-md text-primary mb-2 px-5">
        Szeretnél azonnali értesítést kapni SMS-ben, ha egy potenciálisan veszélyes aszteroida közeledik a Földhöz?
      </p>
      <Link 
        to="/subscription" 
        className="w-80 my-5 inline-block bg-green-500 hover:bg-green-500 transition-all duration-300 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
      >
        Ingyenes értesítést kérek!
      </Link>
    </div>
  );
};

export default NotificationButton;