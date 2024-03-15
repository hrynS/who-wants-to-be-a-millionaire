'use client';

import React from 'react';
import Button from '@/lib/components/Button/Button.tsx';
import '@/styles/globals.css';
import '@/styles/page.css';
import { Inter } from 'next/font/google';
import pageStyles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className={pageStyles.container}>
            <h2>Something went wrong!</h2>
            <Button onClick={() => reset()}>Try again</Button>
          </div>
        </main>
      </body>
    </html>
  );
}
