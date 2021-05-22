import React, { useState } from 'react';
import { Seat } from '../Seat';
import './style.css';

export const SeatPicker = ({ seats, journeyId }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleSeatSelect = (number) => {
    setSelectedSeatNumber(number);
  };

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, index) => (
          <div className="seat-row" key={index}>
            Řada: {index + 1}
            {seats[index].map((seat, index) => (
              <Seat
                onSelect={handleSeatSelect}
                key={index}
                number={seat.number}
                isOccupied={seat.isOccupied}
                isSelected={selectedSeatNumber === seat.number ? true : false}
              />
            ))}
          </div>
        ))}
      </div>
      <button className="btn" type="button">
        Rezervovat
      </button>
    </div>
  );
};
