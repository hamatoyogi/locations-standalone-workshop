import React, { useState, useEffect } from 'react';
import { Coord } from '../types';
import { getDistance } from '../utils';
import './App.css';

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
