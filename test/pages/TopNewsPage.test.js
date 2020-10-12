import React from 'react';
import { shallow } from 'enzyme';
import TopNewsPage from '../../src/pages/TopNewsPage';

describe('The Top News page', () => {
    let wrapper;
    const mockCountries = [
        { name: 'Australia', countryCode: 'au' },
        { name: 'France', countryCode: 'fr' },
    ];
    beforeAll(() => {
        wrapper = shallow(<TopNewsPage countries={mockCountries} />);
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.top-news-page__container')).toHaveLength(1);
    });

    it('should have a List component', async () => {
        expect(wrapper.find('List')).toHaveLength(1);
    });

    it('renders the countries array prop as list item components', async () => {
        expect(wrapper.find('ListItem')).toHaveLength(mockCountries.length);
    });

    it('should have a PromoGrid component', async () => {
        expect(wrapper.find('PromoGrid')).toHaveLength(1);
    });

    describe('when a list item is clicked', () => {
        it('the page headline shows the name of the currently selected country', async () => {
            const listItem = wrapper.find('ListItem').at(1);
            listItem.simulate('click');
            expect(wrapper.find('.top-news-page__current-country').text()).toEqual(
                mockCountries[1].name
            );
        });
    });
});
