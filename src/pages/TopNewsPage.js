import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';
import ListItem from '../components/ListItem';
import PromoGrid from '../components/PromoGrid';
import Promo from '../components/Promo';
import fetchNewsApiHeadlinesForCountry from '../fetchers/fetchNewsApiHeadlinesForCountry';

import '../styles/TopNewsPage.scss';

const TopNewsPage = ({ countries, defaultSelectedCountryCode, headlinesMaxCount }) => {
    const [curListSelectionId, setCurListSelectionId] = useState(defaultSelectedCountryCode);
    const [curHeadlines, setCurHeadlines] = useState([]);

    const updateHeadlinesForCountry = async (countryCode, maxHeadlines) => {
        await fetchNewsApiHeadlinesForCountry(countryCode).then(headlines =>
            setCurHeadlines(headlines.slice(0, maxHeadlines))
        );
    };

    useEffect(() => {
        updateHeadlinesForCountry(curListSelectionId, headlinesMaxCount);
    }, [curListSelectionId]);

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
                    {curHeadlines.map((headline, index) => (
                        <Promo title={headline.title} key={index} />
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
