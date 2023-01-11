import React, { useState } from 'react';
import Player from './Player';
import Enemy from './Enemy';

const App = () => {
    // Définir l'état initial du jeu
    const [gameState, setGameState] = useState({
        turn: 1,
        itemList: ['potion', 'sword']
    });

    return (
        <div>
            <Player hp={100} attack={() => setGameState({ ...gameState, playerHP: gameState.playerHP - 10 })} />
            <Enemy hp={50} />
            <p>Tour : {gameState.turn}</p>
            <p>Objets : {gameState.itemList.join(', ')}</p>

            {/* Ajouter des boutons pour les actions courantes */}
            <button onClick={() => console.log("Utiliser un objet")}>Utiliser un objet</button>
            <button onClick={() => console.log("Se déplacer")}>Se déplacer</button>
        </div>
    );
}

export default App;
