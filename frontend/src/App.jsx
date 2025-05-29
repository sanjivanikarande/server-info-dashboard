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
        setError(null); // डेटा यशस्वीरित्या मिळाल्यावर एरर साफ करा
      } catch (e) {
        setError(e.message);
        setServerInfo(null); // एरर आल्यास जुना डेटा काढू
      } finally {
        setLoading(false);
      }
    };

    // ॲप सुरु झाल्यावर लगेच डेटा फेच करा
    fetchServerInfo();

    // दर 5 सेकंदांनी डेटा फेच करण्यासाठी setInterval सेट करा
    const intervalId = setInterval(fetchServerInfo, 5000); // 5000 ms = 5 सेकंद

    // कॉम्पोनंट अनमाउंट झाल्यावर इंटरव्हल साफ करा
    return () => clearInterval(intervalId);
  }, []); // इथे [] आहे, म्हणजे हा useEffect फक्त एकदाच सेट होईल

  // ... (बाकीचा JSX कोड जसाच्या तसा)
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
    // जेव्हा initial load नंतरही डेटा नसेल पण error नसेल
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