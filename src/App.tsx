import React, { useState, useEffect } from 'react';
import './App.css';

type Coord = {
    latitude: number;
    longitude: number;
}
const locations = [
    {
        name: "Tel Aviv",
        coord: {
            latitude: 32.0852997,
            longitude: 34.7818064
        }
    },
    {
        name: "Be'er Sheva",
        coord: {
            latitude: 31.2457442,
            longitude: 34.7925181
        }
    }
]

function getDistance(cord1: Coord, cord2: Coord) {
    const earthRadius = 6371; // Radius of the Earth in kilometers

    // Convert latitude and longitude from degrees to radians
    const radLat1 = (Math.PI * cord1.latitude) / 180;
    const radLon1 = (Math.PI * cord1.longitude) / 180;
    const radLat2 = (Math.PI * cord2.latitude) / 180;
    const radLon2 = (Math.PI * cord2.longitude) / 180;

    // Haversine formula
    const dLat = radLat2 - radLat1;
    const dLon = radLon2 - radLon1;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Calculate the distance
    const distance = earthRadius * c;

    return distance; // Distance in kilometers
}

function App() {
    const [currentLocation, setCurrentLocation] = useState<Coord>();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentLocation(position.coords);
        });
    }, []);

    if (!currentLocation) {
        return <div>Accept Location</div>
    }

    return (
        <div className="locations-container">
            <h1>Our Locations</h1>
            <table className="locations-table">
                <thead>
                    <tr>
                        <th className="locations-table-header">Name</th>
                        <th className="locations-table-header">Distance (km)</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map(location => {
                        return <tr key={location.name}>
                            <td className="locations-item-name">{location.name}</td>
                            <td className="locations-item-distance">{getDistance(location.coord, currentLocation).toFixed(2)}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
