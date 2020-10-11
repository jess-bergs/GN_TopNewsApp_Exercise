import React from 'react';
import { node } from 'prop-types';

const List = ({ children }) => (
    <ul className="list__container">
        {children.map((child, index) => (
            <li key={index}>{child}</li>
        ))}
    </ul>
);

List.propTypes = {
    children: node.isRequired,
};

export default List;
