'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@/lib/components/index.ts';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks.ts';
import { setIsSidebarOpen } from '@/lib/features/Game/slice.ts';
import { isSidebarOpenSelector } from '@/lib/features/Game/selectors/index.ts';
import burgerMenuSvg from '../../../../../../public/burger-menu.svg?url';
import burgerCloseSvg from '../../../../../../public/burger-close.svg?url';
import styles from './Navbar.module.css';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(isSidebarOpenSelector);

  return (
    <nav className={styles.navbar}>
      <Button
        className={styles.burger}
        onClick={() => dispatch(setIsSidebarOpen(!isSidebarOpen))}
      >
        {isSidebarOpen ? (
          <Image src={burgerCloseSvg} alt="Close menu" width={24} height={24} />
        ) : (
          <Image src={burgerMenuSvg} alt="Close menu" width={24} height={24} />
        )}
      </Button>
    </nav>
  );
}
