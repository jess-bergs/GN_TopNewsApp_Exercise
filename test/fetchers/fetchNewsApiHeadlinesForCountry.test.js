import mockAxios from 'axios';
import fetchNewsApiHeadlinesForCountry from '../../src/fetchers/fetchNewsApiHeadlinesForCountry';

describe('The fetcher', () => {
    const mockCountryCode = 'zz';

    const getExpectedErrorMessage = (countryCode, errorMessage) =>
        `Error when fetching headlines for country code ${countryCode}: ${errorMessage}`;

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('for a given country code', () => {
        it('the fetcher returns the received articles', async () => {
            const mockArticles = ['some article1', 'some article2'];

            mockAxios.get.mockImplementationOnce(() =>
                Promise.resolve({ data: { articles: mockArticles } })
            );

            const result = await fetchNewsApiHeadlinesForCountry(mockCountryCode);
            expect(result).toEqual(mockArticles);
        });
    });

    describe('if a network error occurs', () => {
        it('it throws an error ', async () => {
            const expectedError = 'some network error';
            jest.mock('axios');
            mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error(expectedError)));
            await expect(fetchNewsApiHeadlinesForCountry(mockCountryCode)).rejects.toThrow(
                getExpectedErrorMessage(mockCountryCode, expectedError)
            );
        });
    });
});
