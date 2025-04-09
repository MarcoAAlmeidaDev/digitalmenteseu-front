'use client';

import React, { useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';
import { FiX, FiCheck, FiAlertCircle, FiInfo, FiAlertTriangle } from 'react-icons/fi';

// Interface para o componente standalone
interface NotificationProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose: () => void;
}

// Componente individual de notificação (para uso direto)
export function Notification({ 
  message, 
  type = 'success', 
  duration = 4000, 
  onClose 
}: NotificationProps) {
  // Fechar automaticamente após a duração especificada
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Determinar cores baseadas no tipo
  const getBgColor = () => {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      case 'info': default: return 'bg-blue-500';
    }
  };

  // Renderizar ícone apropriado
  const renderIcon = () => {
    switch (type) {
      case 'success':
        return <FiCheck className="text-white" />;
      case 'error':
        return <FiAlertCircle className="text-white" />;
      case 'warning':
        return <FiAlertTriangle className="text-white" />;
      case 'info':
      default:
        return <FiInfo className="text-white" />;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className={`flex items-center p-4 rounded-lg shadow-lg ${getBgColor()} text-white max-w-md`}>
        <div className="flex-shrink-0 mr-3">
          {renderIcon()}
        </div>
        <div className="flex-1">
          {message}
        </div>
        <button 
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200 focus:outline-none"
          aria-label="Fechar notificação"
        >
          <FiX />
        </button>
      </div>
    </div>
  );
}

// Componente container para as notificações globais do contexto
export default function NotificationsContainer() {
  const { notifications, removeNotification } = useApp();

  // Fechar notificação ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && notifications.length > 0) {
        removeNotification(notifications[notifications.length - 1].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [notifications, removeNotification]);

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 w-full max-w-sm space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex items-center p-4 rounded-lg shadow-lg bg-${
            notification.type === 'success' ? 'green' :
            notification.type === 'error' ? 'red' :
            notification.type === 'warning' ? 'yellow' : 'blue'
          }-500 text-white max-w-md animate-slide-in`}
        >
          <div className="flex-shrink-0 mr-3">
            {notification.type === 'success' && <FiCheck />}
            {notification.type === 'error' && <FiAlertCircle />}
            {notification.type === 'warning' && <FiAlertTriangle />}
            {notification.type === 'info' && <FiInfo />}
          </div>
          <div className="flex-1">
            {notification.message}
          </div>
          <button 
            onClick={() => removeNotification(notification.id)}
            className="ml-4 text-white hover:text-gray-200 focus:outline-none"
            aria-label="Fechar notificação"
          >
            <FiX />
          </button>
        </div>
      ))}
    </div>
  );
}