import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@/components/Icon';

import './Welcome.css';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='welcome'>
      <Icon name='TrueGis' size={110} />
      <Icon name='Spinner' size={52} />
    </div>
  );
};

export default Welcome;
