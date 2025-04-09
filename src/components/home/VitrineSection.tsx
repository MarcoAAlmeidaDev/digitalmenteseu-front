'use client';

// import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactTyped } from 'react-typed';
import { FiShoppingCart, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Importar estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface Product {
  id: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  originalPrice: number;
  discountPrice: number;
  discountPercentage: number;
}

const VitrineSection: React.FC = () => {
  const allProducts: Product[] = [
    {
      id: '1',
      title: 'Planilha Excel',
      image: '/images/product-excel.png',
      rating: 5,
      reviews: 97,
      originalPrice: 999.00,
      discountPrice: 899.00,
      discountPercentage: 10
    },
    {
      id: '2',
      title: 'Pacote Office',
      image: '/images/product-office.png',
      rating: 5,
      reviews: 97,
      originalPrice: 999.00,
      discountPrice: 899.00,
      discountPercentage: 10
    },
    {
      id: '3',
      title: 'Curso de Java Script',
      image: '/images/product-js.png',
      rating: 5,
      reviews: 97,
      originalPrice: 999.00,
      discountPrice: 899.00,
      discountPercentage: 10
    },
    {
      id: '4',
      title: 'Adobe Photoshop',
      image: '/images/product-photoshop.png',
      rating: 5,
      reviews: 97,
      originalPrice: 999.00,
      discountPrice: 899.00,
      discountPercentage: 10
    },
    {
      id: '5',
      title: 'Curso de Marketing Digital',
      image: '/images/product-marketing.png',
      rating: 5,
      reviews: 97,
      originalPrice: 999.00,
      discountPrice: 899.00,
      discountPercentage: 10
    }
  ];

  // Renderizar estrelas baseado na avaliação
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <svg key={i} className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 relative inline-block">
            <ReactTyped
              strings={[
                'Conheça o poder dos produtos digitais',
                'Tenha o poder do digital agora'
              ]}
              typeSpeed={70}
              backSpeed={50}
              loop
              className="inline-block"
            />
            <span className="absolute left-[38%] right-[38%] -bottom-3 h-2 bg-[#f9a012] rounded-full"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Os produtos digitais transformaram profundamente nossa sociedade, economia e vida cotidiana. Seu impacto se estende muito além da mera conveniência tecnológica, representando uma revolução na forma como interagimos, trabalhamos e resolvemos problemas.
          </p>
        </div>

        {/* Novo carrossel 3D com Swiper */}
        <div className="relative mb-32">
          <div className="product-swiper-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={0}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              speed={800}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                // quando a tela for < 640px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // quando a tela for >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // quando a tela for >= 768px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              {allProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="product-card bg-[#f8f9fa] rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                    <div className="product-image-container relative h-[280px] w-full bg-white p-4 flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="object-contain"
                      />
                      
                      {/* Badge de desconto */}
                      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        -{product.discountPercentage}%
                      </div>
                    </div>
                    
                    <div className="product-details p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h3>
                      
                      {/* Avaliações */}
                      <div className="flex items-center mb-3">
                        <div className="flex mr-2">
                          {renderStars(product.rating)}
                        </div>
                        <span className="text-gray-500 text-sm">({product.reviews})</span>
                      </div>
                      
                      {/* Preço */}
                      <div className="mt-auto">
                        <div className="text-sm text-gray-500 line-through">
                          R${product.originalPrice.toFixed(2)}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-4">
                          R${product.discountPrice.toFixed(2)}
                        </div>
                        
                        <Link 
                          href="/vitrine"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                          aria-label="Comprar agora"
                        >
                          <FiShoppingCart size={18} />
                          <span>Comprar Agora</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Botões de navegação customizados */}
            <div className="swiper-button-prev custom-nav-btn left-4 !w-12 !h-12"></div>
            <div className="swiper-button-next custom-nav-btn right-4 !w-12 !h-12"></div>
            
            {/* Paginação customizada */}
            <div className="swiper-pagination custom-pagination"></div>
          </div>
        </div>

        {/* Linha tracejada estilizada */}
        <div className="w-3/4 h-12 mx-auto relative">
          <svg className="w-full h-full" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M5,10 Q75,-10 150,10 Q225,30 295,10" 
              fill="none" 
              stroke="#ff6600" 
              strokeWidth="2" 
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        {/* Botão conhecer produtos */}
        <div className="text-center">
          <Link
            href="/vitrine"
            className="inline-flex items-center gap-2 bg-[#fe6905] hover:bg-[#e45c00] text-white font-medium py-3 px-10 rounded-full transition-colors shadow-md hover:shadow-lg text-lg group"
          >
            <span>Conhecer Produtos</span>
            <FiChevronRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;