import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../../src/components/ListItem';

describe('The list item', () => {
    let wrapper;
    const mockTitle = 'mockTitle';
    beforeAll(() => {
        wrapper = shallow(<ListItem title={mockTitle} />);
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.list-item__container')).toHaveLength(1);
    });

    it('should render the title props as text', async () => {
        expect(wrapper.find('.list-item__container').text()).toEqual(mockTitle);
    });
});
