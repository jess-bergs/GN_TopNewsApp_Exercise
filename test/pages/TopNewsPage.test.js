import React from 'react';
import { shallow } from 'enzyme';
import TopNewsPage from '../../src/pages/TopNewsPage';
import headlineFixtures from '../fixtures/headlinesFixture.json';

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

    it('should render have a List component', async () => {
        expect(wrapper.find('List')).toHaveLength(1);
    });

    it('renders the countries array prop as list item components', async () => {
        expect(wrapper.find('ListItem')).toHaveLength(mockCountries.length);
    });

    it('should render have a PromoGrid component', async () => {
        expect(wrapper.find('PromoGrid')).toHaveLength(1);
    });

    it('renders the headlines as promo components', async () => {
        expect(wrapper.find('Promo')).toHaveLength(headlineFixtures.length);
    });
});
