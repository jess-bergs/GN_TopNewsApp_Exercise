import React from 'react';
import { node } from 'prop-types';

import '../styles/List.scss';

const List = ({ children }) => (
    <ul className="list__container">
        {children.map((child, index) => (
            <li className="list__item-wrapper" key={index}>
                {child}
            </li>
        ))}
    </ul>
);

List.propTypes = {
    children: node.isRequired,
};

export default List;
