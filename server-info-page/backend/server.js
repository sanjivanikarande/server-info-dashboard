const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const serverData = {
    players: "50/64",
    ping: "104 ms",
    tickrate: "60 Hz",
    settings: {
        region: "EUROPE-DE",
        minimap: "ON",
        punkbuster: "ON",
        fairfight: "ON",
        password: "OFF",
        preset: "NORMAL"
    },
    advanced: {
        onlySquadLeaderSpawning: "ON",
        vehicles: "ON",
        teamBalance: "OFF",
        minimapSpotting: "ON",
        hud: "ON",
        ipVehicleCam: "ON",
        regenerativeHealing: "ON",
        killCam: "ON",
        friendlyFire: "OFF",
        dSpotting: "ON",
        enemyHitTag: "ON"
    },
    rules: {
        vehicleSpawnDelay: 400,
        bulletDamage: 100,
        kickAfterTeamKill: 100,
        playerHealth: 100,
        playerRespawnTime: 300,
        kickAfterIdle: 300,
        banAfterKicks: 300
    }
};


app.get('/api/server-info', (req, res) => {
    res.json(serverData);
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});