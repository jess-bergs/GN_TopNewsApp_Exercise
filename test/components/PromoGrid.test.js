import React from 'react';
import { shallow } from 'enzyme';
import PromoGrid from '../../src/components/PromoGrid';

describe('The promo grid component', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(
            <PromoGrid>
                <div className="mockChild" />
                <div className="mockChild" />
                <div className="mockChild" />
            </PromoGrid>
        );
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.promo-grid__container')).toHaveLength(1);
    });

    it('should wrap its children', async () => {
        expect(wrapper.find('.promo-grid__item-wrapper')).toHaveLength(3);
        const itemWrappers = wrapper.find('.promo-grid__item-wrapper');
        itemWrappers.forEach(itemWrapper => {
            itemWrapper.find('.mockChild');
        });
    });
});
