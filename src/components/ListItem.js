import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ title }) => <div className="list-item__container">{title}</div>;

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ListItem;
