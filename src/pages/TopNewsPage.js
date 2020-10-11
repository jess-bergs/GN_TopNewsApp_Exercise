import React from 'react';
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

export default TopNewsPage;
