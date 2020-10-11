import React from 'react';
import TopNewsPage from './pages/TopNewsPage';
import topNewsPageConfig from './topNewsPageConfig.json';

const App = () => (
    <div className="app__container">
        <TopNewsPage {...topNewsPageConfig} />
    </div>
);

export default App;
