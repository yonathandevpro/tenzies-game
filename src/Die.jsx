import React from "react";

export default function Die({val, isHeld, handleClick}) {
   
    return (
            <div onClick={handleClick} className="die-nums" style={{ backgroundColor: isHeld ? '#59E391' : 'white' }}>
                <h1>{val}</h1>
            </div>
      
    );
}