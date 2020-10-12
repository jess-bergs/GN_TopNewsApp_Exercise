import React from 'react';
import { mount } from 'enzyme';
import ListWithDropdownOverflow from '../../src/components/ListWithDropdownOverflow';

describe('The list with dropdown-overflow component', () => {
    let wrapper;
    let wrapperOverflowing;

    const mockMaxVisibleListItems = 6;
    const mockChildrenNotOverflowing = [
        <div className="mockChild" />,
        <div className="mockChild" />,
    ];
    const mockChildrenOverflowing = [
        <div className="mockChild" />,
        <div className="mockChild" />,
        <div className="mockChild" />,
        <div className="mockChild" />,
        <div className="mockChild" />,
        <div className="mockChild" />,
        <div className="mockChild" />,
    ];

    beforeAll(() => {
        wrapper = mount(
            <ListWithDropdownOverflow maxVisibleListItems={mockMaxVisibleListItems}>
                {mockChildrenNotOverflowing}
            </ListWithDropdownOverflow>
        );

        wrapperOverflowing = mount(
            <ListWithDropdownOverflow maxVisibleListItems={mockMaxVisibleListItems}>
                {mockChildrenOverflowing}
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
        describe('if the ListItems exceed the max count of visible items', () => {
            it('the list will render a "more" button', async () => {
                const listContainer = wrapperOverflowing
                    .find('.list-with-dropdown__list')
                    .find('List');
                expect(listContainer.find('.navigation-dropdow__toggle-button')).toHaveLength(1);
            });

            it('the list will only render the max count of ListItems', async () => {
                const listContainer = wrapperOverflowing
                    .find('.list-with-dropdown__list')
                    .find('List');
                expect(listContainer.find('.list__item-wrapper')).toHaveLength(
                    mockMaxVisibleListItems + 1
                );
            });
        });

        describe('if the ListItems dont exceed the max count of visible items', () => {
            it('the list will not render a "more" button', async () => {
                const listContainer = wrapper.find('.list-with-dropdown__list').find('List');
                expect(listContainer.find('.navigation-dropdow__toggle-button')).toHaveLength(0);
            });

            it('the list will render all ListItems', async () => {
                const listContainer = wrapper.find('.list-with-dropdown__list').find('List');
                expect(listContainer.find('.list__item-wrapper')).toHaveLength(
                    mockChildrenNotOverflowing.length
                );
            });
        });
    });
});
