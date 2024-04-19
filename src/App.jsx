import React, { useState, useEffect } from 'react';
import Die from './Die';
import { nanoid } from 'nanoid'



function App() {

  const allNewDice = () => {
    const randomNums = [];
    for (let i = 0; i < 10; i++) {
         randomNums.push(Math.ceil(Math.random() * 6)); 
    }
    return randomNums;
}

    const [ diceNums, setDiceNums ] = useState(allNewDice);
    const diceComponents = diceNums.map(diceNum => <Die key={nanoid()} val={diceNum}/>);
  
     function handleRollClick() {
          setDiceNums(allNewDice());
     }
     
  return (
    <main>
        <div className="container">
            <div className="game-floor">
                <div className="die-grid">
                    {diceComponents}
                </div>
                <button onClick={handleRollClick} class="roll-btn">Roll</button>  
            </div>
        </div>
    </main>
  );
}

export default App
