import React, { useState, useEffect } from 'react';
import Die from './Die';
import Confetti from 'react-confetti'
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
  const [ tenzies, setTenzies ] = useState(false);

  useEffect(() => {
      const allEqual = diceNums.every(dice => (dice.value === diceNums[0].value) && (dice.isHeld));
      if (allEqual) {
          setTenzies(true);
      }

  }, [diceNums]);
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
        if (tenzies) {
            setDiceNums(allNewDice());
            setTenzies(false);
        }
        else {
            setDiceNums(oldDice => oldDice.map(dice => {
                return dice.isHeld ? dice : generateNewDie();
            }));
      }
  }

  return (
      <main>
          { tenzies && <Confetti /> }
          <div className="container">
              <div className="game-floor">
                  <div className="game-title">
                      <h1>Tenzies</h1>
                  </div>
                  <div className="game-desc">
                       <h4>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h4>
                  </div>
                  <div className="die-grid">
                      {diceComponents}
                  </div>
                  <button onClick={() => rollDice()} className="roll-btn"> { tenzies ? 'New Game' : 'Roll' } </button>  
              </div>
          </div>
      </main>
    );
  }

export default App
