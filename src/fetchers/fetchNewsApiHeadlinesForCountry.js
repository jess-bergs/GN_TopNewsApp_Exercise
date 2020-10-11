import axios from 'axios';
import PropTypes from 'prop-types';

const NEWS_API_KEY = process.env.NEWS_API_KEY;

const fetchNewsApiHeadlinesForCountry = async countryCode => {
    const newsApiHeadlinesUrl = 'https://newsapi.org/v2/top-headlines';
    const requestParams = { country: countryCode, apiKey: NEWS_API_KEY };
    const headlinesRequestUrl = `${newsApiHeadlinesUrl}?${new URLSearchParams(requestParams)}`;
    const error = errorMessage => {
        throw new Error(
            `Error when fetching headlines for country code ${countryCode}: ${errorMessage}`
        );
    };
    let result;
    try {
        const req = await axios.get(headlinesRequestUrl);
        result = req.data;
    } catch (err) {
        error(err.message);
    }

    return result.articles ? result.articles : [];
};

fetchNewsApiHeadlinesForCountry.propTypes = {
    countryCode: PropTypes.string.isRequired,
};

export default fetchNewsApiHeadlinesForCountry;
