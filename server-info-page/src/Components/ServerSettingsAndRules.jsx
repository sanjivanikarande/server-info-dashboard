import React from 'react'
import SettingItem from './SettingItem' 

function ServerSettingsAndRules() {
  return (
    <div className="advanced-rules-grid">
      
      <div className="settings-column">
        <h3>SETTINGS</h3>
        <SettingItem label="REGION" value="EUROPE-DE" />
        <SettingItem label="PUNKBuster" value="ON" />
        <SettingItem label="FAIRFIGHT" value="ON" />
        <SettingItem label="PASSWORD" value="OFF" />
        <SettingItem label="PRESET" value="NORMAL" />
      </div>

    
      <div className="advanced-column">
        <h3>ADVANCED</h3>
        <SettingItem label="MINIMAP" value="ON" />
        <SettingItem label="ONLY SQUAD LEADER SPAWN" value="OFF" />
        <SettingItem label="VEHICLES" value="ON" />
        <SettingItem label="TEAM BALANCE" value="ON" />
        <SettingItem label="MINIMAP SPOTTING" value="ON" />
        <SettingItem label="HUD" value="ON" />
        <SettingItem label="3P VEHICLE CAM" value="ON" />
        <SettingItem label="REGENERATIVE HEALTH" value="ON" />
        <SettingItem label="KILL CAM" value="ON" />
        <SettingItem label="FRIENDLY FIRE" value="OFF" />
        <SettingItem label="3D SPOTTING" value="ON" />
        <SettingItem label="ENEMY NAME TAGS" value="ON" />
      </div>

      
      <div className="rules-column">
        <h3>RULES</h3>
        <SettingItem label="VEHICLE SPAWN DELAY" value="400" />
        <SettingItem label="BULLET DAMAGE" value="100" />
        <SettingItem label="KICK AFTER TEAM KILLS" value="5" />
        <SettingItem label="PLAYER HEALTH" value="100" />
        <SettingItem label="PLAYER RESPAWN TIME" value="100" />
        <SettingItem label="KICK AFTER IDLE" value="300" />
        <SettingItem label="BAN AFTER KICKS" value="1" />
      </div>
    </div>
  )
}

export default ServerSettingsAndRules