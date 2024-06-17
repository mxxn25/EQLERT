export const fetchData = async () => {
    const response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
    const data = await response.json();
    return data.features
        .filter(feature => feature.properties.place.includes('Malaysia'))
        .map(feature => ({
            date: new Date(feature.properties.time).toISOString().substring(0, 10),
            time: new Date(feature.properties.time).toLocaleTimeString('en-US', {
                hourCycle: 'h23',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }),
            geophone_value: feature.properties.mag, // Assuming magnitude is used for geophone value
        }));
};
