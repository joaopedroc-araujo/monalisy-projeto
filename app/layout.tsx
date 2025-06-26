import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Clínica Monalisy Rodrigues - Medicina Estética',
  description: 'Especializada em procedimentos estéticos para face, corpo e cabelo. Tratamentos avançados com tecnologia de ponta e profissionais qualificados.',
  keywords: 'medicina estética, procedimentos estéticos, tratamentos faciais, tratamentos corporais, cuidados com cabelo, Monalisy Rodrigues',
  authors: [{ name: 'Clínica Monalisy Rodrigues' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter bg-white text-gray-800 antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
