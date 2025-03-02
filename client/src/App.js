import React, { useEffect, useState } from 'react';
import axios from './api'; // Import your Axios instance
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Making a GET request
        axios.get('/data')
            .then(response => {
                setData(response.data.message);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newData = { someData: 'This is new data' };

        // Making a POST request
        axios.post('/data', newData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div>
                <h1>{data}</h1>
                <button onClick={handleSubmit}>Send Data</button>
            </div>
        </div>
    );
};

export default App;
