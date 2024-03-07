import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Body from '@/components/Body/Body';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Header />
      <Body />
    </main>
  );
}
