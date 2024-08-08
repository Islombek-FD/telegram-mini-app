import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';

import Icon from '@/components/Icon';
import Button from '@/components/Button';

import './Onboarding.css';

interface IItem {
  icon: string;
  title: string;
  description: string;
}

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const items: IItem[] = useMemo(
    () => [
      {
        icon: 'Onboarding1',
        title: 'O’zingizga eng yaqin bo’lgan joylarni bir zumda toping',
        description:
          'Yaqiningizdagi dorixonalar, do’konlar, supermarketlar va barcha turdagi xizmat ko’rsatish maskanlarini telegramdan chiqmasdan toping',
      },
      {
        icon: 'Onboarding2',
        title: 'Mahsulot buyurtma qilish yoki joy band qilish xizmatlari endi botimizda',
        description:
          'O’zingizga kerakli joyni toping va u yerdagi mahsulot buyurtma qilish yoki joy band qilish xizmatlaridan foydalaning',
      },
      {
        icon: 'Onboarding3',
        title: 'Bizning botimiz orqali joylardagi aksiyalarni kuzatib boring va foydalaning',
        description:
          'Joy ma’lumotlaridan “Aksiyalar” bo’limiga o’ting va aksiyalardan unumli foydalaning',
      },
    ],
    [],
  );

  const onClick = () => {
    if (step < items.length) {
      setStep(step + 1);
    } else {
      navigate('/place');
    }
  };

  return (
    <div className='onboarding'>
      <div className='onboarding__icon'>
        <Icon name={items[step - 1].icon} type='figma' size={200} />
      </div>

      <h2 className='onboarding__title'>{items[step - 1].title}</h2>

      <p className='onboarding__description'>{items[step - 1].description}</p>

      <div className='onboarding__steps'>
        {items.map((_item, index) => (
          <div className={cx('onboarding__step', step === index + 1 && 'current')} key={index} />
        ))}
      </div>

      <Button
        className='onboarding__btn'
        title='Keyingisi'
        variant='blue'
        onClick={onClick}
        block
      />
    </div>
  );
};

export default Onboarding;
