import React from 'react';

const EarthquakeList = ({ earthquakes }) => {
    return (
        <div>
            <h2>Recent Earthquakes</h2>
            <ul>
                {earthquakes.map((quake) => (
                    <li key={quake.id}>
                        {quake.properties.place} - {new Date(quake.properties.time).toLocaleString()}
                        - Magnitude: {quake.properties.mag}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EarthquakeList;
