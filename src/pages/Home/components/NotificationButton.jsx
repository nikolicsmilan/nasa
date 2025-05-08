// src/pages/Home/components/NotificationButton.jsx
import StyledButton from '../../../components/buttons/StyledButton'; // <<< Ellenőrizd az import útvonalat!

const NotificationButton = ({ handleSubscribe }) => {
  return (
    <div className='border-0 text-center w-full max-w-xs mx-auto'>
      <p className="text-md text-primary mb-4 px-5">
        Szeretnél SMS-t kapni veszély esetén?
      </p>
      <StyledButton
        onClick={handleSubscribe}
        variant="glowing" // <<< Itt adjuk meg a stílustípust
        className="w-full my-3 py-3 px-6 uppercase lg:text-lg" // Méret, margó, szöveg stílusok
        aria-label="Subscribe to asteroid alerts"
      >
        Ingyenes értesítést kérek! {/* A label helyett children-ként adjuk át */}
      </StyledButton>
    </div>
  );
};

export default NotificationButton;