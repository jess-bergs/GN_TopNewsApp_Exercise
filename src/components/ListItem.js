import React from 'react';
import PropTypes from 'prop-types';

import '../styles/ListItem.scss';

const ListItem = ({ title }) => <span className="list-item__container">{title}</span>;

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ListItem;
