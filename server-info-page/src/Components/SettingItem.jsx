import React from 'react'

function SettingItem({ label, value }) {
  return (
    <div className="setting-item">
      <span>{label}:</span>
      <span className="value">{value}</span>
    </div>
  )
}

export default SettingItem