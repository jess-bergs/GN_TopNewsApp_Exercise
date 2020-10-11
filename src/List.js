import React from 'react';

const List = ({ children }) => (
    <ul className="list__container">
        {children.map((child, index) => (
            <li key={index}>{child}</li>
        ))}
    </ul>
);

export default List;
