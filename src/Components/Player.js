import React from 'react';

const Player = ({ hp, attack }) => (
    <div>
        <p>PV du joueur : {hp}</p>
        <button onClick={attack}>Attaquer</button>
    </div>
);

export default { Player };