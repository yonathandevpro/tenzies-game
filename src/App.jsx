import React from 'react';
import Die from './Die';

function App() {
  
  return (
    <main>
        <div className="container">
            <div className="game-floor">
                <div className="die-grid">
                    <Die val={1} />
                    <Die val={2} />
                    <Die val={3} />
                    <Die val={2} />
                    <Die val={5} />
                    <Die val={6} />
                    <Die val={1} />
                    <Die val={4} />
                    <Die val={3} />
                    <Die val={2} />
                </div>
                 
            </div>
        </div>
    </main>
  );
}

export default App
