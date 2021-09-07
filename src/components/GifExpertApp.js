import React, { useState } from "react";
import  AddCategory  from "./AddCategory";
import { GifList } from "./GifList";

export const GifExpertApp = ({defaultCategorias = []}) => {
  const [categorias, setCategorias] = useState(defaultCategorias);

  const handleAdd = (cat) => {
    setCategorias([cat, ...categorias]);
  };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory handleAdd={handleAdd}/>

      <ol>
        {categorias.map((categoria) => (
          <GifList categoria={categoria} key={categoria} />
        ))}
      </ol>
    </div>
  );
};
