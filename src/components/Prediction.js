import React, { useState } from 'react';
import './Prediction.css';
import Header from './Header'
import { SelectSign } from './SelectSign';
import { SelectTimeframe } from './SelectTimeframe';
import { Horoscope } from './Horoscope';

function Prediction() {
  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTimeframe,setSelectedTimeframe] = useState(null);

  const restart = () => {
    setSelectedSign(null);
    setSelectedTimeframe(null);
  };

  return (
      <div className="App">
      <Header />
      <div className='pred_section' >
      <h1> Horoscope </h1>
      {!selectedSign && (
        <SelectSign onSignSelected={setSelectedSign} />
      )}
      {selectedSign && !selectedTimeframe && (
        <SelectTimeframe
          onTimeframeSelected={setSelectedTimeframe}
        />
      )}
      {selectedSign && selectedTimeframe && (
        <Horoscope
          sign={selectedSign}
          timeframe={selectedTimeframe}
        />
      )}
      <button onClick={restart}>Restart</button>
    </div>
    </div>
  );
}

export default Prediction;
