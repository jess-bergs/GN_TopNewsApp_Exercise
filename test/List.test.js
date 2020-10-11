import React from 'react';
import { shallow } from 'enzyme';
import List from '../src/List';

describe('The list component', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<List />);
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.list__container')).toHaveLength(1);
    });
});
