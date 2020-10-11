import React from 'react';
import { shallow } from 'enzyme';
import List from '../../src/components/List';

describe('The list component', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(
            <List>
                <div className="mockChild" />
                <div className="mockChild" />
                <div className="mockChild" />
            </List>
        );
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.list__container')).toHaveLength(1);
    });

    it('should render the children as a list', async () => {
        expect(wrapper.find('ul')).toHaveLength(1);
        expect(wrapper.find('li')).toHaveLength(3);
        const itemWrappers = wrapper.find('li');
        itemWrappers.forEach(itemWrapper => {
            itemWrapper.find('.mockChild');
        });
    });
});
