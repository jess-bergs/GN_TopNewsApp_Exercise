import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';
import ListItem from '../components/ListItem';
import PromoGrid from '../components/PromoGrid';
import Promo from '../components/Promo';
import headlineFixtures from '../../test/fixtures/headlinesFixture.json';

const TopNewsPage = ({ countries }) => {
    const [curListSelectionId, setCurListSelectionId] = useState('gb');

    const getCurrentCountryName = countryCode => {
        const country = countries.find(entry => entry.countryCode === countryCode);
        return country ? country.name : undefined;
    };

    return (
        <div className="top-news-page__container">
            <List>
                {countries.map(country => (
                    <ListItem
                        title={country.name}
                        onClick={() => setCurListSelectionId(country.countryCode)}
                        key={country.countryCode}
                    />
                ))}
            </List>
            <div className="top-news-page__content-panel">
                <div className="top-news-page__current-country">
                    {getCurrentCountryName(curListSelectionId)}
                </div>
                <PromoGrid>
                    {headlineFixtures.map((headline, index) => (
                        <Promo title={headline} key={index} />
                    ))}
                </PromoGrid>
            </div>
        </div>
    );
};

TopNewsPage.propTypes = {
    countries: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        })
    ),
};

export default TopNewsPage;
