import React from 'react';
import './Dashboard.css';
import { Location } from '../types';

const locations: Location[]  = [
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

function Dashboard() {

    return (
        <div className="locations-container">
            <div className="locations-header-container">
                <h1>Our Locations</h1>
                <button className="update-locatios-button">Update Locations</button>
            </div>
            <table className="locations-table">
                <thead>
                    <tr>
                        <th className="locations-table-header">Name</th>
                        <th className="locations-table-header">Coords</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map(location => {
                        return <tr key={location.name}>
                            <td className="locations-item-name">{location.name}</td>
                            <td className="locations-item-name">{location.coord.latitude.toFixed(2)},{location.coord.longitude.toFixed(2)}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
