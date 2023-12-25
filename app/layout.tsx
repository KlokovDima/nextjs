import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

const inter = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Проект на NEXT JS',
  description: 'Какой-то description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
