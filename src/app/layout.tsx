import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: 'NivoTech | Elevando seu negócio ao próximo nível digital',
  description: 'Agência de criação de sites focada em alta conversão e design premium.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn(inter.variable)}>
      <body>
        <GoogleTagManager gtmId="GTM-TLP3P89D" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
