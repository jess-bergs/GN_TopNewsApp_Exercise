import React from 'react';
import { node } from 'prop-types';

import '../styles/PromoGrid.scss';

const PromoGrid = ({ children }) => (
    <div className="promo-grid__container">
        <div className="promo-grid__gel-grid-wrapper">
            {children.map((child, index) => (
                <div className="promo-grid__gel-grid-item" key={index}>
                    <span className="promo-grid__gel-grid-content-wrapper">{child}</span>
                </div>
            ))}
        </div>
    </div>
);

PromoGrid.propTypes = {
    children: node,
};

export default PromoGrid;
