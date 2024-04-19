import React, { useState, useEffect } from 'react';
import Die from './Die';
import { nanoid } from 'nanoid'



function App() {

  const allNewDice = () => {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie());
    }
    return newDice;
  }
  


  const [ diceNums, setDiceNums ] = useState(allNewDice);


  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
  }

  function selectDice (id) {
      const index = diceNums.findIndex(diceNum => diceNum.id === id);
      if (index !== -1) {
          const newDices = [...diceNums];
          newDices[index] = { ...newDices[index], isHeld: !newDices[index].isHeld  }
          setDiceNums(newDices);
      }
  }

  const diceComponents = diceNums.map(diceNum => <Die key={diceNum.id} val={diceNum.value} isHeld={diceNum.isHeld} handleClick={() => selectDice(diceNum.id)} />);
    
      

     function rollDice() {
          setDiceNums(oldDice => oldDice.map(dice => {
              return dice.isHeld ? dice : generateNewDie();
          }));
     }

  return (
    <main>
        <div className="container">
            <div className="game-floor">
                <div className="die-grid">
                    {diceComponents}
                </div>
                <button onClick={rollDice} className="roll-btn">Roll</button>  
            </div>
        </div>
    </main>
  );
}

export default App
