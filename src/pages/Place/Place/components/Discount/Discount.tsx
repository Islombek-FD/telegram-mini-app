import React from 'react';

import Empty from '@/components/Empty';

import './Discount.css';

const Discount: React.FC = () => {
  return (
    <div className='discount'>
      <Empty icon='NoDiscount' description='Aksiyalar mavjud emas' />
    </div>
  );
};

export default Discount;
