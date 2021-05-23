import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

export const Reservation = () => {
  let { id } = useParams();

  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/reservation?id=${id}`)
      .then((resp) => resp.json())
      .then((json) => setReservation(json.data));
  }, []);

  return (
    <>
      {reservation && (
        <div className="reservation">
          <h2>Vaše e-jízdenka</h2>
          <div className="reservation__body">
            <div className="reservation__body__headings">
              <p>Datum cesty:</p>
              <p>Z:</p>
              <p>Do:</p>
              <p>Sedadlo:</p>
            </div>
            <div className="reservation__body__data">
              <p>
                <strong>{reservation.date}</strong>
              </p>
              <p>
                <strong>{reservation.fromCity.code}</strong>
              </p>
              <p>
                <strong>{reservation.toCity.code}</strong>
              </p>
              <p>
                <strong>{reservation.seatNumber}</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
