import React, { useEffect, useState } from 'react';

const News = () => {
    const [earthquakeNews, setEarthquakeNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);

    useEffect(() => {
        async function fetchEarthquakeNews() {
            const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
            const response = await fetch(url);
            const data = await response.json();
            const sortedNews = data.features.sort((a, b) => new Date(b.properties.time) - new Date(a.properties.time));
            setEarthquakeNews(sortedNews);
        }

        fetchEarthquakeNews();
    }, []);

    return (
        <div>
            <h1>Latest Earthquake</h1>
            {selectedNews ? (
                <div>
                    <h2>{selectedNews.properties.title}</h2>
                    <p>Magnitude: {selectedNews.properties.mag}</p>
                    <p>Time: {new Date(selectedNews.properties.time).toLocaleString()}</p>
                    <p>Details: <a href={selectedNews.properties.url} target="_blank" rel="noopener noreferrer">{selectedNews.properties.url}</a></p>
                    <button onClick={() => setSelectedNews(null)}>Go Back</button>
                </div>
            ) : (
                <div>
                    {earthquakeNews.slice(0, 10).map((earthquake) => (
                        <div
                            key={earthquake.id}
                            onClick={() => setSelectedNews(earthquake)}
                            style={{ cursor: 'pointer', padding: '10px', border: '1px solid #ccc', marginBottom: '5px' }}
                        >
                            {earthquake.properties.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default News;
