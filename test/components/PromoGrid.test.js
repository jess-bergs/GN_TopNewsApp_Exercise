import React from 'react';
import { shallow } from 'enzyme';
import PromoGrid from '../../src/components/PromoGrid';

describe('The promo grid component', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<PromoGrid />);
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.promo-grid__container')).toHaveLength(1);
    });
});
