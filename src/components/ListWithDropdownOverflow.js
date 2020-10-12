import React from 'react';
import List from './List';

const ListWithDropdownOverflow = ({ children }) => (
    <div className="list-with-dropdown__container">
        <div className="list-with-dropdown__list">
            <List>{children}</List>
        </div>
    </div>
);

export default ListWithDropdownOverflow;
