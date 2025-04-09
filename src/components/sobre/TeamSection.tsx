'use client';

import React from 'react';
import Image from 'next/image';
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Renata Cardoso',
      role: 'CEO & Fundadora',
      image: '/images/Renata.jpg',
      bio: 'Visionária tecnológica com mais de 15 anos de experiência em transformação digital e empreendedorismo.',
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        instagram: 'https://instagram.com'
      }
    },
    {
      name: 'Marco Almeida',
      role: 'Desenvolvedor Full-Stack',
      image: '/images/author-1.jpg',
      bio: 'Especialista em desenvolvimento full-stack e arquitetura de sistemas complexos.',
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    },
    {
      name: 'Marco Almeida',
      role: 'Desenvolvedor Full-Stack',
      image: '/images/author-1.jpg',
      bio: 'Especialista em desenvolvimento full-stack e arquitetura de sistemas complexos.',
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    }
    
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">CONHEÇA NOSSO TIME</h2>
          <p className="text-lg text-gray-600">
            Nossa equipe é formada por especialistas apaixonados por tecnologia e inovação, 
            dedicados a criar soluções que transformam negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-100 bg-gray-300 flex items-center justify-center">
                
                {/* Substitua o comentário abaixo e descomente quando tiver as imagens reais */}
  
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={320}
                  objectFit="cover"
                  className="w-full h-full"
                />
                
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#0761ff] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                <div className="flex space-x-4">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#0077b5] transition-colors"
                    >
                      <FiLinkedin size={20} />
                    </a>
                  )}
                  
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  
                  {member.social.instagram && (
                    <a 
                      href={member.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#e1306c] transition-colors"
                    >
                      <FiInstagram size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;