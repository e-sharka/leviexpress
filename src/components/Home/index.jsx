import React, { useState } from 'react';
import { JourneyPicker } from './JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import './style.css';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  return (
    <>
      <h2>Home</h2>;
      <JourneyPicker onJourneyChange={setJourney} />
      {journey ? <JourneyDetail journey={journey} /> : null}
    </>
  );
};
