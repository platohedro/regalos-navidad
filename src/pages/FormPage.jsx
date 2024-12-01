// src/pages/FormPage.jsx
import React from 'react';
import GiftForm from '../components/GiftForm';

const FormPage = ({ onGiftSubmit }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Registrar Nuevo Regalo</h1>
        <GiftForm onGiftSubmit={onGiftSubmit} />
      </div>
    </div>
  );
};

export default FormPage;