import estilo from "./ItemLook.module.css";
import React from 'react';

const ItemLook = ({ image, title }) => {
  return (
    <div className={estilo.lookItem}>
      <img src={image} alt={title} />
    </div>
  );
};

export default ItemLook;
