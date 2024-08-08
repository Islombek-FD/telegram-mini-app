import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@/components/Icon';
import Item from '@/components/Item';

import './ProblemItem.css';

const ProblemItem: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='problem-item'>
      <Item
        left={
          <div className='problem-item__icon'>
            <Icon name='UserProblem' color='#ffffff' size={22} />
          </div>
        }
        center={
          <div className='problem-item__info'>
            <div>
              <strong className='problem-item__key'>Xatolik topildimi?</strong>
              <span className='problem-item__value'>Biz bilan bog’laning</span>
            </div>
            <div>
              <Icon name='ChevronRight' color='#7F7F7F' size={24} />
            </div>
          </div>
        }
        onClick={() => navigate('/place/problem')}
      />
    </div>
  );
};

export default ProblemItem;
