import React from 'react';
import { shallow } from 'enzyme';
import TopNewsPage from '../src/TopNewsPage';

describe('The Top News page', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<TopNewsPage />);
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.top-news-page__container')).toHaveLength(1);
    });

    it('should render have a List component', async () => {
        expect(wrapper.find('List')).toHaveLength(1);
    });
});
