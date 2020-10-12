import React from 'react';
import List from './List';
import ListItem from './ListItem';

const ListWithDropdownOverflow = ({ children, maxVisibleListItems }) => {
    const isOverflowing = () => children.length > maxVisibleListItems;

    const getListItems = () => {
        const items = children.slice(0, maxVisibleListItems);
        if (isOverflowing) items.push(<ListItem title="more" />);
        return items;
    };

    return (
        <div className="list-with-dropdown__container">
            <div className="list-with-dropdown__list">
                <List>{getListItems()}</List>
            </div>
        </div>
    );
};

export default ListWithDropdownOverflow;
