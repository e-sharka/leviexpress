import React, { useState } from 'react';
import { JourneyPicker } from './JourneyPicker';
import './style.css';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  return (
    <>
      <h2>Home</h2>;
      <JourneyPicker onJourneyChange={setJourney} />
      <p className="confirmation">
        {' '}
        {journey ? `Nalezeno spojení s ID ${journey.journeyId}` : null}
      </p>
    </>
  );
};
