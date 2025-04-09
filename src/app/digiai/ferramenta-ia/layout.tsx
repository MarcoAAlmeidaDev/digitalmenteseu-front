import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ferramentas de IA | DigitalmenteSEU',
  description: 'Explore nossa curadoria das melhores ferramentas de Inteligência Artificial para aumentar sua produtividade e criatividade.'
};

export default function IAToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}