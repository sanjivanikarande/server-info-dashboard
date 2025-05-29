import React from 'react'
import './App.css' 

import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import ServerOverview from './components/ServerOverview.jsx'
import ServerStatsCard from './components/ServerStatsCard.jsx'
import ServerSettingsAndRules from './components/ServerSettingsAndRules.jsx'
import MapRotation from './components/MapRotation.jsx'

function App() {
  return (
    <div className="App">
      <Sidebar /> 

      <div className="main-content">
        <Header /> 
        <ServerOverview /> 

        
        <div className="data-section"> 
            <ServerStatsCard /> 
            <ServerSettingsAndRules /> 
        </div>

        <MapRotation /> 
      </div>
    </div>
  )
}

export default App