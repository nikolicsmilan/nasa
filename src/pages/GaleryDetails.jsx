import React from "react";
import { useParams,Link } from "react-router-dom";

const GaleryDetails = () => {
  const params = useParams();
  //Innen léehet fetch vagy a már meglévő databan kutatni
  return (
    <div>
      <h1>GaleryDetails</h1>
      <p> {params.productId}</p>

      <p><Link to=".." relative="path">vissza</Link></p>
    </div>
  );
};

export default GaleryDetails;
//      <p><Link to=".." relative="path">vissza</Link></p> ez csak egyet fog visszamenni
// <p><Link to="/ize/hoze" relative="path">vissza</Link></p> >> de így megint abszolút path lesz szóval a doma után rakja