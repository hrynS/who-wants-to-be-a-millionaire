'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import burgerMenuSvg from '../../../../public/burger-menu.svg?url';
import burgerCloseSvg from '../../../../public/burger-close.svg?url';
import Button from '../Button/Button.tsx';
export default function Navbar() {
  const [isBurgerMenuOpen, setBurgerIsOpen] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <Button
        className={styles.burger}
        onClick={() => setBurgerIsOpen(!isBurgerMenuOpen)}
      >
        {isBurgerMenuOpen ? (
          <Image src={burgerCloseSvg} alt="Close menu" width={24} height={24} />
        ) : (
          <Image src={burgerMenuSvg} alt="Close menu" width={24} height={24} />
        )}
      </Button>
    </nav>
  );
}
