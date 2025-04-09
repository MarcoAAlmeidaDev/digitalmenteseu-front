'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiChevronDown, FiUser, FiLogOut, FiSettings } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface NavLink {
  href: string;
  label: string;
  hasSubmenu?: boolean;
  submenu?: {
    href: string;
    label: string;
  }[];
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu do usuário quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  const toggleSubmenu = (label: string): void => {
    if (activeSubmenu === label) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(label);
    }
  };

  const toggleUserMenu = (): void => {
    setShowUserMenu(!showUserMenu);
  };

  const handleLogout = (): void => {
    logout();
    setShowUserMenu(false);
  };

  // Função para verificar se um link está ativo
  const isLinkActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Removido o link "Login" do array principal
  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/blog', label: 'Blog' },
    { href: '/digitalmente-inspirado', label: 'Digitalmente Inspirado' },
    { href: '/vitrine', label: 'Vitrine' },
    { 
      href: '/digiai', 
      label: 'DigiAI', 
      hasSubmenu: true,
      submenu: [
        { href: '/digiai/ferramenta-ia', label: 'Ferramentas de I.A' },
        { href: '/digiai/gerador-ia', label: 'Gerador de Texto com I.A' }
      ]
    },
    { 
      href: '/digitube', 
      label: 'DigiTube', 
      hasSubmenu: true,
      submenu: [
        { href: '/digitube/videos-conteudos', label: 'Videos e Conteúdos' }
      ]
    },
    { 
      href: '/digicast', 
      label: 'DigiCast', 
      hasSubmenu: true,
      submenu: [
        { href: '/podcast', label: 'Podcasts' },
        { href: '/radio', label: 'Radio' }
      ]
    },
  ];

  // Adicionando o link de login ao menu mobile separadamente
  const mobileNavLinks = [
    ...navLinks,
    ...(isAuthenticated ? [] : [{ href: '/login', label: 'Login' }])
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo à esquerda - Substituído por imagem */}
        <div className="flex-shrink-0">
          <Link 
            href="/" 
            className="flex items-center"
            onClick={closeMenu}
          >
            <Image 
              src="/images/logo-dig.png" 
              alt="DigitalmenteSEU" 
              width={130} 
              height={20} 
              className="h-auto w-auto"
              priority
            />
          </Link>
        </div>

        {/* Links de navegação centralizados com espaçamento aumentado */}
        <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.hasSubmenu ? (
                <>
                  <button 
                    className={`flex items-center font-medium transition-colors ${
                      isLinkActive(link.href) ? 'text-[#0761ff]' : 'text-black hover:text-[#0761ff]'
                    }`}
                    onClick={() => toggleSubmenu(link.label)}
                  >
                    {link.label}
                    <FiChevronDown className="ml-1" />
                  </button>
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-lg shadow-lg bg-white overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {link.submenu?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isLinkActive(subItem.href) ? 'text-[#0761ff] bg-gray-50' : 'text-gray-700 hover:text-[#0761ff] hover:bg-gray-50'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isLinkActive(link.href) ? 'text-[#0761ff]' : 'text-black hover:text-[#0761ff]'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Login + Botão de cadastro ou Menu de usuário à direita */}
        <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
          {isAuthenticated && user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={toggleUserMenu}
                className="flex items-center space-x-2 focus:outline-none group"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-blue-200 transition-all">
                  <Image
                    src={user.avatar || '/images/author-1.jpg'}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    Minha Conta
                  </span>
                  <FiChevronDown className={`ml-1 text-gray-500 transition-transform duration-200 ${
                    showUserMenu ? 'rotate-180' : ''
                  }`} />
                </div>
              </button>
              
              {/* Menu do usuário */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white border border-gray-200 overflow-hidden z-50 origin-top-right animate-scaleIn">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={user.avatar || '/images/author-1.jpg'}
                          alt={user.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{user.name}</h4>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <nav className="p-2">
                    <Link
                      href="/area-membro"
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <FiUser className="text-gray-500" />
                      <span>Área de Membro</span>
                    </Link>
                    <Link
                      href="/configuracoes"
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <FiSettings className="text-gray-500" />
                      <span>Configurações</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-left text-red-600 hover:text-red-700 transition-colors"
                    >
                      <FiLogOut />
                      <span>Sair</span>
                    </button>
                  </nav>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className={`font-medium transition-colors ${
                  isLinkActive('/login') ? 'text-[#0761ff]' : 'text-black hover:text-[#0761ff]'
                }`}
              >
                Login
              </Link>
              <Link 
                href="/registro" 
                className={`${
                  isLinkActive('/registro') 
                    ? 'bg-blue-700' 
                    : 'bg-[#0761ff] hover:bg-blue-700'
                } text-white py-2 px-6 rounded-full font-medium transition-colors shadow-md hover:shadow-lg`}
              >
                Cadastre-se
              </Link>
            </>
          )}
        </div>

        {/* Botão menu hambúrguer - apenas visível em dispositivos móveis */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu para mobile */}
      <div 
        className={`lg:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          {/* Exibir usuário logado no menu mobile */}
          {isAuthenticated && user && (
            <div className="flex items-center space-x-3 py-3 mb-3 border-b border-gray-100">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={user.avatar || '/images/author-1.jpg'}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{user.name}</h4>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          )}
          
          <nav className="flex flex-col space-y-2">
            {mobileNavLinks.map((link) => (
              <div key={link.label}>
                {link.hasSubmenu ? (
                  <>
                    <button 
                      className={`flex items-center justify-between w-full font-medium py-2.5 transition-colors ${
                        isLinkActive(link.href) ? 'text-[#0761ff]' : 'text-black hover:text-[#0761ff]'
                      }`}
                      onClick={() => toggleSubmenu(link.label)}
                    >
                      {link.label}
                      <FiChevronDown className={`ml-1 transition-transform ${activeSubmenu === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                      className={`bg-gray-50 rounded-md my-1 overflow-hidden transition-all duration-200 ${
                        activeSubmenu === link.label ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-2">
                        {link.submenu?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={`block py-2.5 px-3 rounded transition-colors ${
                              isLinkActive(subItem.href) ? 'text-[#0761ff]' : 'text-gray-700 hover:text-[#0761ff]'
                            }`}
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-medium py-2.5 block transition-colors ${
                      isLinkActive(link.href) ? 'text-[#0761ff]' : 'text-black hover:text-[#0761ff]'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Links adicionais para usuários logados no mobile */}
            {isAuthenticated && (
              <>
                <Link 
                  href="/area-membro" 
                  className="flex items-center space-x-2 font-medium py-2.5 text-gray-700 hover:text-[#0761ff]"
                  onClick={closeMenu}
                >
                  <FiUser size={18} />
                  <span>Área de Membro</span>
                </Link>
                <Link 
                  href="/configuracoes" 
                  className="flex items-center space-x-2 font-medium py-2.5 text-gray-700 hover:text-[#0761ff]"
                  onClick={closeMenu}
                >
                  <FiSettings size={18} />
                  <span>Configurações</span>
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  className="flex items-center space-x-2 font-medium py-2.5 text-red-600 hover:text-red-700 w-full text-left"
                >
                  <FiLogOut size={18} />
                  <span>Sair</span>
                </button>
              </>
            )}
            
            {!isAuthenticated && (
              <Link 
                href="/registro" 
                className={`${
                  isLinkActive('/registro') 
                    ? 'bg-blue-700' 
                    : 'bg-[#0761ff] hover:bg-blue-700'
                } text-white py-3 px-6 rounded-full font-medium transition-colors text-center shadow-md mt-4`}
                onClick={closeMenu}
              >
                Cadastre-se
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;