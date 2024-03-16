'use client';

import React from 'react';
import Button from '@/lib/components/Button/Button.tsx';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Link from "next/link";
import pageStyles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className={inter.className}>
      <div className={pageStyles.container}>
        <div>
        <h2 className={pageStyles.errorMessage}>Oops... An error occured</h2>
        <p>You can either try refreshing the page or restart the game.</p>
        </div>
        <Link className={pageStyles.link} href={'/game'}><Button onClick={() => reset()}>Restart game</Button></Link>
      </div>
    </main>
  );
}
