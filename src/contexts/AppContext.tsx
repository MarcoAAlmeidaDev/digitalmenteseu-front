'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CartProvider } from './CartContext';
import { AuthProvider } from './AuthContext';
import { Product } from '@/types/product';

// Interface para a notificação
interface Notification {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  id: string;
}

// Tipo para o contexto global da aplicação
interface AppContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  
  // Favoritos
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string | number) => void;
  isFavorite: (productId: string | number) => boolean;
  
  // Notificações
  notifications: Notification[];
  showNotification: (message: string, type: 'success' | 'error' | 'warning' | 'info') => void;
  removeNotification: (id: string) => void;
}

// Criação do contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Hook para usar o contexto
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

// Provedor do contexto
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Carregar favoritos do localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
      }
    }
  }, []);

  // Salvar favoritos no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const addToFavorites = (product: Product) => {
    setFavorites((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromFavorites = (productId: string | number) => {
    setFavorites((prev) => prev.filter((product) => product.id !== productId));
  };

  const isFavorite = (productId: string | number) => {
    return favorites.some((product) => product.id === productId);
  };

  const showNotification = (message: string, type: 'success' | 'error' | 'warning' | 'info') => {
    const id = Date.now().toString();
    setNotifications((prev) => [...prev, { message, type, id }]);

    // Auto-remover após 5 segundos
    setTimeout(() => {
      removeNotification(id);
    }, 5000);

    return id;
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  const value = {
    isDarkMode,
    toggleDarkMode,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    notifications,
    showNotification,
    removeNotification,
  };

  // Encapsulando outros providers para facilitar o uso
  return (
    <AppContext.Provider value={value}>
      <AuthProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </AuthProvider>
    </AppContext.Provider>
  );
};

export default AppContext;