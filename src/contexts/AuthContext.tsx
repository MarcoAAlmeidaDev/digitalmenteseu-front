'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Definindo a interface do usuário
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

// Definindo a interface do contexto de autenticação
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  isLoading: boolean;
}

// Criando o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Usuários estáticos para teste
const STATIC_USERS = [
  {
    id: '1',
    name: 'Usuário Teste',
    email: 'teste@exemplo.com',
    password: 'senha123',
    role: 'user',
    avatar: '/images/author-1.jpg'
  },
  {
    id: '2',
    name: 'Admin Teste',
    email: 'admin@exemplo.com',
    password: 'admin123',
    role: 'admin',
    avatar: '/images/author-2.jpg'
  }
];

// Provider do contexto
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar se o usuário já está autenticado (persistência de sessão)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Erro ao analisar usuário armazenado:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  // Função de login
  const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    setIsLoading(true);
    
    // Simular um delay de rede
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Lógica para verificar as credenciais estáticas
    const foundUser = STATIC_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (foundUser) {
      // Remover a senha antes de armazenar
      const { password: _, ...userWithoutPassword } = foundUser;
      
      // Armazenar usuário no estado e localStorage
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      setIsLoading(false);
      return { success: true, message: 'Login realizado com sucesso!' };
    }

    setIsLoading(false);
    return { success: false, message: 'Email ou senha incorretos.' };
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Preparado para futuras implementações com backend real
  // Substitua a função login por:
  /*
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        return { success: true, message: 'Login realizado com sucesso!' };
      } else {
        return { success: false, message: data.message || 'Erro de autenticação' };
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      return { success: false, message: 'Erro ao conectar ao servidor' };
    } finally {
      setIsLoading(false);
    }
  };
  */

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personalizado para usar o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}