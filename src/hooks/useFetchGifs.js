import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //Para que se repita una unica vez
  useEffect(
    () => {
      getGifs(categoria).then(data => setState({ data: data, loading: false }));
    },
    // lo ponemos así para que solo recargue cuando se modifique la categoria
    [categoria]
  );

  return state;
};

export default useFetchGifs;
