import React from 'react';
import { shallow } from 'enzyme';
import Promo from '../../src/components/Promo';

describe('The promo component', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Promo />);
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.promo__container')).toHaveLength(1);
    });
});
