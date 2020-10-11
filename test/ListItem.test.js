import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../src/ListItem';

describe('The list item', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<ListItem />);
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.list-item__container')).toHaveLength(1);
    });
});
