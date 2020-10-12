import React from 'react';
import { shallow } from 'enzyme';
import ListWithDropdownOverflow from '../../src/components/ListWithDropdownOverflow';

describe('The list with dropdown-overflow component', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<ListWithDropdownOverflow />);
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.list-with-dropdown__container')).toHaveLength(1);
    });
});
