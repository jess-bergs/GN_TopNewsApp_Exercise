import React from 'react';
import { mount } from 'enzyme';
import ListWithDropdownOverflow from '../../src/components/ListWithDropdownOverflow';

describe('The list with dropdown-overflow component', () => {
    let wrapper;
    const mockMaxVisibleListItems = 3;
    beforeAll(() => {
        wrapper = mount(
            <ListWithDropdownOverflow maxVisibleListItems={mockMaxVisibleListItems}>
                <div className="mockChild" />
                <div className="mockChild" />
                <div className="mockChild" />
                <div className="mockChild" />
                <div className="mockChild" />
                <div className="mockChild" />
            </ListWithDropdownOverflow>
        );
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.list-with-dropdown__container')).toHaveLength(1);
    });

    it('should render a list with a List component', async () => {
        const listContainer = wrapper.find('.list-with-dropdown__list');
        expect(listContainer.find('List')).toHaveLength(1);
    });

    describe('for a given max count of visible Items', () => {
        it('the list will only render the max count of ListItems', async () => {
            const listContainer = wrapper.find('.list-with-dropdown__list').find('List');
            expect(listContainer.find('.list__item-wrapper')).toHaveLength(mockMaxVisibleListItems);
        });
    });
});
