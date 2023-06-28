import React from "react";

import estilo from "./ItemLook.module.css";

const ItemLook = ({ image, title }) => {
  return (
    <div className={estilo.lookItem}>
      <img src={image} alt={title} />
    </div>
  );
};

export default ItemLook;
