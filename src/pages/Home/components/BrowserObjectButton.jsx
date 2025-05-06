// src/pages/Home/components/BrowserObjectButton.jsx
import { useNavigate } from 'react-router-dom';
import StyledButton from '../../Test/components/buttons/StyledButton'; // <<< Ellenőrizd az import útvonalat!

const BrowserObjectButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/asteroide');
  };

  return (
    <div className='text-center w-full max-w-xs mx-auto my-0'>
      <StyledButton
        onClick={handleClick}
        variant="neutral" // <<< Itt adjuk meg a stílustípust ('bordered' helyett 'neutral')
        className="w-full my-3 py-3 px-6 uppercase text-sm" // Méret, margó, szöveg stílusok
      >
        Aszteroida info {/* A label helyett children-ként adjuk át */}
      </StyledButton>
    </div>
  );
};

export default BrowserObjectButton;