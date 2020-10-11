import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('The app', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<App />);
    });

    it('should render with the correct base class', async () => {
        expect(wrapper.find('.app__container')).toHaveLength(1);
    });
});
