import React from 'react'

function ServerStatsCard() {
  return (
    <div className="data-section">
      <div className="basic-stats">
        <div className="stat-item">
          <span className="stat-label">PLAYERS</span>
          <span className="stat-value">50/64</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">PING</span>
          <span className="stat-value">104 ms</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">TICKRATE</span>
          <span className="stat-value">60 Hz</span>
        </div>
      </div>
    </div>
  )
}

export default ServerStatsCard