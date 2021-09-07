import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifListItem from "./GifListItem";
import PropTypes from "prop-types";

export const GifList = ({ categoria }) => {
  const { data, loading } = useFetchGifs(categoria);

  return (
    <div className="card-grid">
      <h3 className="titulo-cat">{categoria}</h3>
      {loading && (
        <p id="loadingText" className="animate__animated animate__flash">Loading...</p>
      )}
      {data.map((gif) => (
        <GifListItem key={gif.id} title={gif.title} url={gif.url} />
      ))}
    </div>
  );
};

GifList.propTypes = {
  categoria: PropTypes.string.isRequired,
};
