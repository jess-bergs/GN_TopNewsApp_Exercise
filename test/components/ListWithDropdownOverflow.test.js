import React from 'react';
import { shallow } from 'enzyme';
import ListWithDropdownOverflow from '../../src/components/ListWithDropdownOverflow';

describe('The list with dropdown-overflow component', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(
            <ListWithDropdownOverflow>
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
});
