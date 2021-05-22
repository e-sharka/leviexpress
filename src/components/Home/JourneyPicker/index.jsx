import React, { useState, useEffect } from 'react';
import mapImage from './img/map.svg';
import './style.css';

export const JourneyPicker = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Odesílám formulář s cestou');
    console.log({ fromCity });
    console.log({ toCity });
    console.log({ date });
  };

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/cities`)
      .then((resp) => resp.json())
      .then((json) => setCities(json.data));
  }, []);

  const CityOptions = ({ cities }) => {
    return (
      <>
        <option value="">Vyberte</option>
        {cities.map((city) => (
          <option value={city.code} key={city.code}>
            {city.name}
          </option>
        ))}
      </>
    );
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(event) => setFromCity(event.target.value)}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              value={toCity}
              onChange={(event) => setToCity(event.target.value)}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select
              value={date}
              onChange={(event) => setDate(event.target.value)}
            >
              <option value="">Vyberte</option>
              <option>20.05.2021</option>
              <option>21.05.2021</option>
              <option>22.05.2021</option>
              <option>23.05.2021</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
