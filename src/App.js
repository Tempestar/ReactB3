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
            <button onClick={() => setGameState({ ...gameState, Ehp: gameState.Ehp - 10 })}>Attaquer</button>
            <button onClick={() => console.log("Utiliser un objet")}>Utiliser un objet</button>
            <button onClick={() => console.log("Se déplacer")}>Se déplacer</button>
        </div>
    );
}

export default App;
