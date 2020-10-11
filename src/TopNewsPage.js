import React from 'react';
import List from './List';
import ListItem from './ListItem';

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
