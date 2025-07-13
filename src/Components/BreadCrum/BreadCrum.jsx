import React from 'react';
import './BreadCrum.css';
import arrow_icon from '../../assets/breadcrum_arrow.png';

const BreadCrum = ({ product }) => {
  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.name}
    </div>
  );
};

export default BreadCrum;
