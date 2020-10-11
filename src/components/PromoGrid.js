import React from 'react';
import { node } from 'prop-types';

const PromoGrid = ({ children }) => (
    <div className="promo-grid__container">
        {children.map((child, index) => (
            <span className="promo-grid__item-wrapper" key={index}>
                {child}
            </span>
        ))}
    </div>
);

PromoGrid.propTypes = {
    children: node.isRequired,
};

export default PromoGrid;
