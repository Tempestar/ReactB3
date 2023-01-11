import React, { useState } from 'react';
import Player from './Components/Player';
import Enemy from './Components/Enemy';

const App = () => {
    // Définir l'état initial du jeu
    const [gameState, setGameState] = useState({
        turn: 1,
        itemList: ['potion', 'sword']
    });

    return (
        <div>
            <Player Php={100} />
            <Enemy Ehp={50} />
            <p>Tour : {gameState.turn}</p>
            <p>Objets : {gameState.itemList.join(', ')}</p>

            {/* Ajouter des boutons pour les actions courantes */}
            <button onClick={() => setGameState({ ...gameState, Ehp: gameState.Ehp - 10 })}>Attack</button>
            <button onClick={() => console.log("Defend")}>Defend</button>
            <button onClick={() => console.log("Flee")}>Flee</button>
        </div>
    );
}

export default App;
