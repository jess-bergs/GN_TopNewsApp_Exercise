import React, { useState } from 'react';
import List from './List';
import ListItem from './ListItem';

const ListWithDropdownOverflow = ({ children, maxVisibleListItems }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const isOverflowing = () => children.length > maxVisibleListItems;

    const toggleDropdown = () => (showDropdown ? setShowDropdown(false) : setShowDropdown(true));

    const DropDownToggleButton = () => (
        <span className={'list-with-dropdown__toggle-button'}>
            <ListItem title="more" onClick={() => toggleDropdown()} />
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
            {showDropdown && isOverflowing() && (
                <div className="list-with-dropdown__dropdown">
                    <List>{children.slice(maxVisibleListItems)}</List>
                </div>
            )}
        </div>
    );
};

export default ListWithDropdownOverflow;
