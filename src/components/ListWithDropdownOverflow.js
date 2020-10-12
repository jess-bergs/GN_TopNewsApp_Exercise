import React from 'react';
import List from './List';

const ListWithDropdownOverflow = ({ children, maxVisibleListItems }) => {
    const getListItems = () => children.slice(0, maxVisibleListItems);

    return (
        <div className="list-with-dropdown__container">
            <div className="list-with-dropdown__list">
                <List>{getListItems()}</List>
            </div>
        </div>
    );
};

export default ListWithDropdownOverflow;
