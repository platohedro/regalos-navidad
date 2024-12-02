// src/pages/FormPage.jsx
import React from 'react';
import GiftForm from '../components/GiftForm';

const FormPage = ({ onGiftSubmit }) => {
  return (
    <div className="bg-counter-primary bg-opacity-70 py-8 rounded-lg shadow-lg">
      <div className="max-w-md mx-auto">
        <GiftForm onGiftSubmit={onGiftSubmit} />
      </div>
    </div>
  );
};

export default FormPage;