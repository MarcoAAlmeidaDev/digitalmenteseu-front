// src/components/layout/Footer.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 - Logo e descrição */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image 
                src="/images/logo-dig.png" 
                alt="DigitalmenteSEU" 
                width={180} 
                height={60} 
                className="h-auto"
              />
            </div>
            <p className="text-gray-600 mb-6">
              Transforme sua presença digital e potencialize seu crescimento online com nossas soluções completas.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all">
                <FaFacebookF size={18} />
              </Link>
              <Link href="#" className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-all">
                <FaInstagram size={18} />
              </Link>
              <Link href="#" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-all">
                <FaLinkedinIn size={18} />
              </Link>
              <Link href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-all">
                <FaWhatsapp size={18} />
              </Link>
              <Link href="#" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-all">
                <FaYoutube size={18} />
              </Link>
              <Link href="#" className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-all">
                <FaTiktok size={18} />
              </Link>
            </div>
          </div>

          {/* Coluna 2 - Empresa */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Empresa</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-blue-600 transition-all">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-all">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-blue-600 transition-all">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Produtos */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Produtos</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/digitube" className="text-gray-600 hover:text-blue-600 transition-all">
                  DigiTube
                </Link>
              </li>
              <li>
                <Link href="/digiai" className="text-gray-600 hover:text-blue-600 transition-all">
                  DigiAI
                </Link>
              </li>
              <li>
                <Link href="/digicast" className="text-gray-600 hover:text-blue-600 transition-all">
                  DigiCast
                </Link>
              </li>
              <li>
                <Link href="/vitrine-digital" className="text-gray-600 hover:text-blue-600 transition-all">
                  Vitrine Digital
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Ajuda e Legal */}
          <div className="md:col-span-1">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Ajuda</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-all">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/suporte" className="text-gray-600 hover:text-blue-600 transition-all">
                    Suporte
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/termos" className="text-gray-600 hover:text-blue-600 transition-all">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/privacidade" className="text-gray-600 hover:text-blue-600 transition-all">
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-200 my-10"></div>

        {/* Rodapé do rodapé */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            © 2025 DigitalmenteSEU. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/juridico" className="text-gray-600 text-sm hover:text-blue-600 transition-all">
              Assuntos jurídicos
            </Link>
            <Link href="/privacidade" className="text-gray-600 text-sm hover:text-blue-600 transition-all">
              Política de privacidade
            </Link>
            <Link href="/seguranca" className="text-gray-600 text-sm hover:text-blue-600 transition-all">
              Segurança
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;