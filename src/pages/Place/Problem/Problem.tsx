import React from 'react';

import Spacer from '@/components/Spacer';
import PlaceCard from '@/components/PlaceCard';

import Send from './components/Send';
import Networks from './components/Networks';
import CallCenter from './components/CallCenter';

import './Problem.css';

const Problem: React.FC = () => (
  <div className='problem'>
    <PlaceCard />

    <Send />

    <Spacer size={24} />

    <CallCenter />

    <Spacer size={24} />

    <Networks />
  </div>
);

export default Problem;
