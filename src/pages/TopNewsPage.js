import React from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';
import ListItem from '../components/ListItem';

const TopNewsPage = ({ countries }) => (
    <div className="top-news-page__container">
        <List>
            {countries.map(country => (
                <ListItem title={country.name} key={country.countryCode} />
            ))}
        </List>
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
