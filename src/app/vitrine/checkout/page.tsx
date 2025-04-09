// src/app/vitrine/checkout/page.tsx
import { Metadata } from 'next';
import { CartProvider } from '@/contexts/CartContext';
import { AppProvider } from '@/contexts/AppContext';
import { VitrineHeader } from '@/components/vitrine/VitrineHeader';
import CheckoutContent from './CheckoutContent';

export const metadata: Metadata = {
  title: 'Finalizar Compra | Vitrine',
  description: 'Finalize sua compra na Vitrine DigitalmenteSeu.',
};

export default function CheckoutPage() {
  return (
    <CartProvider>
      <AppProvider>
        <div className="min-h-screen bg-gray-50">
          <VitrineHeader />
          
          <main className="container mx-auto px-4 py-8">
            <section className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Finalizar Compra</h1>
              <p className="text-gray-600">
                Preencha os dados abaixo para concluir seu pedido
              </p>
            </section>
            
            <CheckoutContent />
          </main>
        </div>
      </AppProvider>
    </CartProvider>
  );
}