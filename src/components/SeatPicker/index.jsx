import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Seat } from '../Seat';
import './style.css';

export const SeatPicker = ({ seats, journeyId }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleSeatSelect = (number) => {
    setSelectedSeatNumber(number);
  };

  let history = useHistory();

  const handleBuy = () => {
    console.log('Funguju!');
    console.log(journeyId);

    fetch(
      `https://leviexpress-backend.herokuapp.com/api/reserve?seat=${selectedSeatNumber}&journeyId=${journeyId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json.data.reservationId);
        const reservationId = json.data.reservationId;
        history.push(`/reservation/${reservationId}`);
      });
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
      <button
        disabled={selectedSeatNumber === null}
        onClick={handleBuy}
        className="btn"
        type="button"
      >
        Rezervovat
      </button>
    </div>
  );
};
