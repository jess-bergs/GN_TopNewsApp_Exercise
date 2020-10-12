import React from 'react';
import propTypes, { node } from 'prop-types';

import '../styles/List.scss';

const List = ({ children, layout }) => (
    <ul className={`list__container list__layout--${layout}`}>
        {children.map((child, index) => (
            <li className="list__item-wrapper" key={index}>
                {child}
            </li>
        ))}
    </ul>
);

List.propTypes = {
    children: node.isRequired,
    layout: propTypes.string.isRequired,
};

List.defaultProps = {
    layout: 'vertical',
};

export default List;
