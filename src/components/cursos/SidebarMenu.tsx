'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { 
  FiHome, 
  FiBook, 
  FiAward, 
  FiLogOut,
  FiMenu,
  FiChevronLeft,
  FiUser,
  FiInfo,
  FiFileText,
  FiFeather,
  FiShoppingBag,
  FiCpu,
  FiYoutube,
  FiRadio,
  FiChevronDown,
  FiSettings
} from 'react-icons/fi';

interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  hasSubmenu?: boolean;
  submenu?: {
    href: string;
    label: string;
  }[];
}

interface SidebarMenuProps {
  isCompact?: boolean;
  onToggle?: (expanded: boolean) => void;
}

export default function SidebarMenu({ isCompact = false, onToggle }: SidebarMenuProps) {
  // Começar expandido por padrão
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  // Efeito para informar o componente pai sobre o estado da sidebar
  useEffect(() => {
    if (onToggle) {
      onToggle(isExpanded);
    }
  }, [isExpanded, onToggle]);

  // Lidar com resize de tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsExpanded(false);
      } else {
        // Em desktop, manter o estado atual ou expandir se for primeira carga
        if (typeof window.__sidebarInitialized === 'undefined') {
          window.__sidebarInitialized = true;
          setIsExpanded(true);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSubmenu = (label: string) => {
    if (activeSubmenu === label) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(label);
    }
  };

  const isLinkActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Links principais do Header
  const navLinks: NavLink[] = [
    { href: '/', label: 'Home', icon: <FiHome size={20} /> },
    { href: '/sobre', label: 'Sobre', icon: <FiInfo size={20} /> },
    { href: '/blog', label: 'Blog', icon: <FiFileText size={20} /> },
    { href: '/digitalmente-inspirado', label: 'Digitalmente Inspirado', icon: <FiFeather size={20} /> },
    { href: '/vitrine', label: 'Vitrine', icon: <FiShoppingBag size={20} /> },
    { 
      href: '/ferramenta-ia', 
      label: 'DigiAI', 
      icon: <FiCpu size={20} />,
      hasSubmenu: false,
      submenu: [
        { href: '/digiai/ferramenta-ia', label: 'Ferramentas de I.A' },
        { href: '/digiai/gerador-ia', label: 'Gerador de Texto com I.A' }
      ]
    },
    { 
      href: '/videos-conteudos', 
      label: 'DigiTube', 
      icon: <FiYoutube size={20} />,
      hasSubmenu: false,
      submenu: [
        { href: '/digitube/videos-conteudos', label: 'Videos e Conteúdos' }
      ]
    },
    { 
      href: '/digicast', 
      label: 'DigiCast', 
      icon: <FiRadio size={20} />,
      hasSubmenu: false,
      submenu: [
        { href: '/digicast/podcast', label: 'Podcasts' },
        { href: '/digicast/radio', label: 'Radio' }
      ]
    },
    { 
      // Elemento para fantasma para dar um espaçamento para os outros botões
      href: '/', 
      label: '', 
      icon: '',
      hasSubmenu: false,
      submenu: [
        { href: '//', label: '' },
        { href: '//', label: '' }
      ]
    },
  ];

  // Links da área do usuário
  const memberLinks: NavLink[] = [
    { href: '/area-membro', label: 'Área de Membro', icon: <FiUser size={20} /> },
    { href: '/meus-cursos', label: 'Meus Cursos', icon: <FiBook size={20} /> },
    { href: '/certificados', label: 'Certificados', icon: <FiAward size={20} /> },
  ];

  return (
    <>
      {/* Botão hambúrguer para mobile */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-30 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-pointer"
        aria-label="Toggle menu"
      >
        <FiMenu size={20} />
      </button>
      
      {/* Overlay para fechar o menu em dispositivos móveis */}
      {isExpanded && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Menu lateral - fixo */}
      <aside
        className={`main-sidebar fixed top-0 left-0 h-full z-30 bg-[#1a1a2e] shadow-xl transition-all duration-300 ease-in-out ${
          isExpanded ? 'w-64' : 'w-0 lg:w-20'
        } overflow-hidden`}
        style={{ display: 'block !important' }}
      >
        {/* Botão para recolher o menu (desktop apenas) */}
        <button
          onClick={toggleSidebar}
          className="hidden lg:flex absolute top-4 right-4 bg-[#262640] text-gray-300 hover:text-white p-2 rounded-full transition-colors cursor-pointer"
          aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
        >
          <FiChevronLeft size={18} className={`transition-transform duration-300 ${isExpanded ? '' : 'rotate-180'}`} />
        </button>

        {/* Logo do site */}
        <div className={`px-6 py-8 flex items-center transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
          <Link href="/" className="text-gray-100 font-bold text-xl">
            {isExpanded ? 'DigitalmenteSeu' : ''}
          </Link>
        </div>

        {/* Container de navegação com scroll */}
        <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden">
          {/* Área com scroll - ajustada para garantir espaço para o footer */}
          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar pb-36">
            {/* Links de área do usuário */}
            <nav className="px-4 mb-6">
              <h3 className={`text-xs uppercase text-gray-500 font-medium mb-2 px-4 ${!isExpanded && 'hidden lg:hidden'}`}>
                Área do Usuário
              </h3>
              <ul className="space-y-1">
                {memberLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`flex items-center py-2 px-4 rounded-lg transition-colors cursor-pointer ${
                        isLinkActive(item.href)
                          ? 'bg-blue-600/20 text-blue-400'
                          : 'text-gray-400 hover:bg-[#262640] hover:text-gray-200'
                      }`}
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className={`ml-3 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden lg:hidden'}`}>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Divisor */}
            <div className="h-px bg-gray-700 mx-4 mb-6"></div>
            
            {/* Links principais */}
            <nav className="px-4">
              <h3 className={`text-xs uppercase text-gray-500 font-medium mb-2 px-4 ${!isExpanded && 'hidden lg:hidden'}`}>
                Navegação
              </h3>
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.hasSubmenu ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(link.label)}
                          className={`w-full flex items-center justify-between py-2 px-4 rounded-lg transition-colors cursor-pointer ${
                            isLinkActive(link.href)
                              ? 'bg-blue-600/20 text-blue-400'
                              : 'text-gray-400 hover:bg-[#262640] hover:text-gray-200'
                          }`}
                        >
                          <div className="flex items-center">
                            <span className="flex-shrink-0">{link.icon}</span>
                            <span className={`ml-3 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden lg:hidden'}`}>
                              {link.label}
                            </span>
                          </div>
                          {isExpanded && (
                            <FiChevronDown
                              className={`transition-transform duration-200 ${
                                activeSubmenu === link.label ? 'rotate-180' : ''
                              }`}
                              size={16}
                            />
                          )}
                        </button>
                        
                        {/* Submenu */}
                        {isExpanded && (
                          <div
                            className={`mt-1 ml-4 pl-4 border-l border-gray-700 overflow-hidden transition-all duration-200 ${
                              activeSubmenu === link.label ? 'max-h-40' : 'max-h-0'
                            }`}
                          >
                            {link.submenu?.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className={`block py-2 px-4 rounded-lg text-sm transition-colors ${
                                  isLinkActive(subItem.href)
                                    ? 'text-blue-400'
                                    : 'text-gray-500 hover:text-gray-300'
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`flex items-center py-2 px-4 rounded-lg transition-colors cursor-pointer ${
                          isLinkActive(link.href)
                            ? 'bg-blue-600/20 text-blue-400'
                            : 'text-gray-400 hover:bg-[#262640] hover:text-gray-200'
                        }`}
                      >
                        <span className="flex-shrink-0">{link.icon}</span>
                        <span className={`ml-3 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden lg:hidden'}`}>
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Perfil do usuário e logout - agora em posição fixa no rodapé da sidebar */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#1a1a2e] border-t border-gray-700 py-4 px-4">
            {user && (
              <div className={`flex items-center py-2 px-4 rounded-lg text-gray-400 mb-2 ${isExpanded ? '' : 'justify-center'}`}>
                {isExpanded ? (
                  <>
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white uppercase">
                      {user.name?.charAt(0) || 'U'}
                    </div>
                    <div className="ml-3 overflow-hidden">
                      <p className="text-sm font-medium text-gray-300 truncate">{user.name || 'Usuário'}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email || 'usuario@exemplo.com'}</p>
                    </div>
                  </>
                ) : (
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white uppercase">
                    {user.name?.charAt(0) || 'U'}
                  </div>
                )}
              </div>
            )}

            {/* <Link
              href="/configuracoes"
              className={`flex items-center py-2 px-4 rounded-lg text-gray-400 hover:bg-[#262640] hover:text-gray-200 transition-colors mb-2 ${!isExpanded && 'justify-center'}`}
            >
              <FiSettings size={20} />
              <span className={`ml-3 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden lg:hidden'}`}>
                Configurações
              </span>
            </Link> */}

            <button
              onClick={logout}
              className={`flex items-center w-full py-2 px-4 rounded-lg text-red-400 hover:bg-[#262640] hover:text-red-300 transition-colors ${
                !isExpanded && 'justify-center'
              }`}
            >
              <FiLogOut size={20} />
              <span className={`ml-3 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden lg:hidden'}`}>
                Sair
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

// Adicionar a declaração global para o TypeScript
declare global {
  interface Window {
    __sidebarInitialized?: boolean;
  }
}