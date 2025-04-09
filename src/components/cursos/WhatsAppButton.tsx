'use client';

import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20obter%20mais%20informações%20sobre%20os%20cursos." 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 cursor-pointer"
      aria-label="Contato via WhatsApp"
    >
      <FiMessageCircle size={24} />
    </a>
  );
}