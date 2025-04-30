// src/misc/StyleIcon.jsx
import PropTypes from 'prop-types';

const StyleIcon = ({ imageUrl, altText }) => {
  if (!imageUrl) {
    return null;
  }

  return (
    <img
      src={imageUrl}
      alt={altText || "Style Icon"}
      // Növeljük meg a méretet, pl. w-10 h-10 (2.5rem) vagy w-12 h-12 (3rem)
      // Az object-contain marad, hogy a kép ne torzuljon
      className="w-32 h-28 object-cover rounded-2xl " // Vagy w-12 h-12
    />
  );
};

StyleIcon.propTypes = {
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
};

export default StyleIcon;