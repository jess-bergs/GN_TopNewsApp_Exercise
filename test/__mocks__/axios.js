const axios = {
    get: jest.fn(() => Promise.resolve({ data: [{ test: 'test' }] })),
};

module.exports = axios;
