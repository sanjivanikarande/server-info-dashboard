import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [serverInfo, setServerInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/server-info');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setServerInfo(data);
        setError(null);
      } catch (e) {
        setError(e.message);
        setServerInfo(null); 
      } finally {
        setLoading(false);
      }
    };

    fetchServerInfo();
    
    const intervalId = setInterval(fetchServerInfo, 5000);

    
    return () => clearInterval(intervalId);
  }, []); 

  
  if (loading) {
    return <div className="container">Loading server information...</div>;
  }

  if (error) {
    return (
      <div className="container error">
        <h2>Error loading server info:</h2>
        <p>{error}</p>
        <p>Retrying in 5 seconds...</p>
      </div>
    );
  }

  if (!serverInfo) {
    
    return <div className="container">No server information available.</div>;
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Server Information Dashboard</h1>
      </header>
      <main>
        <section className="info-card">
          <h2>Players</h2>
          <p>{serverInfo.players}</p>
        </section>

        <section className="info-card">
          <h2>Ping</h2>
          <p>{serverInfo.ping}</p>
        </section>

        <section className="info-card">
          <h2>Tickrate</h2>
          <p>{serverInfo.tickrate}</p>
        </section>

        <section className="info-card">
          <h2>Settings</h2>
          <ul>
            {Object.entries(serverInfo.settings).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </section>

        <section className="info-card">
          <h2>Advanced Settings</h2>
          <ul>
            {Object.entries(serverInfo.advanced).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </section>

        <section className="info-card">
          <h2>Rules</h2>
          <ul>
            {Object.entries(serverInfo.rules).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
