import React, { useState } from 'react';
import Player from './Components/Player';
import Enemy from './Components/Enemy';


const App = () => {

    // Définir l'état initial du jeu
    const [gameState, setGameState] = useState({
        turn: 1,
        enemyHP: Enemy.Ehp,
        playerHP: Player.Php
    });

    return (
        <div>
            <Player Php={100} />
            <Enemy Ehp={50} />
            <p>Tour : {gameState.turn}</p>

            {/* Ajouter des boutons pour les actions courantes */}
            <button onClick={() => {
                setGameState({ ...gameState, enemyHP: gameState.enemyHP - 10 });
                }
                }>Attack</button>
            <button onClick={() => console.log("Item")}>Item</button>
            <button onClick={() => console.log("Flee")}>Flee</button>
        </div>
    );
}

export default App;
