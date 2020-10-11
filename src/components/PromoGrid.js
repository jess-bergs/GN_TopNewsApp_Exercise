import React from 'react';

const PromoGrid = ({ children }) => (
    <div className="promo-grid__container">
        {children.map((child, index) => (
            <span className="promo-grid__item-wrapper" key={index}>
                {child}
            </span>
        ))}
    </div>
);

export default PromoGrid;
