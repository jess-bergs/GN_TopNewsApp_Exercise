import React from 'react';
import { shallow } from 'enzyme';
import Promo from '../../src/components/Promo';

describe('The promo component', () => {
    let wrapper;
    const mockTitle = 'mockTitle';
    beforeAll(() => {
        wrapper = shallow(<Promo title={mockTitle} />);
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.promo__container')).toHaveLength(1);
    });

    it('should render the title props as text', async () => {
        expect(wrapper.find('.promo__container').text()).toEqual(mockTitle);
    });
});
