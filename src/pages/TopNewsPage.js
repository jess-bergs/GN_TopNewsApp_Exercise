import React from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';
import ListItem from '../components/ListItem';
import PromoGrid from '../components/PromoGrid';
import Promo from '../components/Promo';
import headlineFixtures from '../../test/fixtures/headlinesFixture.json';

const TopNewsPage = ({ countries }) => (
    <div className="top-news-page__container">
        <List>
            {countries.map(country => (
                <ListItem title={country.name} key={country.countryCode} />
            ))}
        </List>
        <PromoGrid>
            {headlineFixtures.map((headline, index) => (
                <Promo title={headline} key={index} />
            ))}
        </PromoGrid>
    </div>
);

TopNewsPage.propTypes = {
    countries: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        })
    ),
};

export default TopNewsPage;
