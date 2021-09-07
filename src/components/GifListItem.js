import React from "react";
import PropTypes from 'prop-types'


const GifListItem = ({title, url}) => {
  return (
    <div className="card animate__animated animate__bounceInUp">
      <img src={url} alt={title} title={title} />
      <p>{title}</p>
    </div>
  );
};

GifListItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default GifListItem;