import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Promo.scss';

const Promo = ({ title }) => <div className="promo__container">{title}</div>;

Promo.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Promo;
