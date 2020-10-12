import React from 'react';
import List from './List';
import ListItem from './ListItem';

const ListWithDropdownOverflow = ({ children, maxVisibleListItems }) => {
    const isOverflowing = () => children.length > maxVisibleListItems;

    const DropDownToggleButton = () => (
        <span className={'list-with-dropdown__toggle-button'}>
            <ListItem title="more" />
        </span>
    );

    const getListItems = () => {
        const items = children.slice(0, maxVisibleListItems);
        if (isOverflowing()) items.push(<DropDownToggleButton key={children.length} />);
        return items;
    };

    return (
        <div className="list-with-dropdown__container">
            <div className="list-with-dropdown__list">
                <List>{getListItems()}</List>
            </div>
            {isOverflowing() && (
                <div className="list-with-dropdown__dropdown">
                    <List>{children.slice(maxVisibleListItems)}</List>
                </div>
            )}
        </div>
    );
};

export default ListWithDropdownOverflow;
