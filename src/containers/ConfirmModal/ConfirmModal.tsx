import React from 'react';

import Modal from '@/components/Modal';
import Button from '@/components/Button';

import './ConfirmModal.css';

interface IProps {
  isOpen: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<IProps> = ({ isOpen, title, onCancel, onConfirm }) => (
  <Modal isOpen={isOpen}>
    <div className='confirm-modal'>
      <div className='confirm-modal__content'>
        <h3 className='confirm-modal__title'>{title}</h3>
      </div>
      <div className='confirm-modal__footer'>
        <Button
          title='Bekor qilish'
          className='confirm-modal__btn'
          variant='white'
          onClick={onCancel}
          block
        />

        <div className='confirm-modal__line' />

        <Button
          title="O'chirish"
          className='confirm-modal__btn'
          variant='white'
          onClick={onConfirm}
          block
        />
      </div>
    </div>
  </Modal>
);

export default ConfirmModal;
