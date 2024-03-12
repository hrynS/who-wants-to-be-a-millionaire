'use client';
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import BurgerMenuIcon from '../../../../public/burger-menu.svg';
import BurgerCloseIcon from '../../../../public/burger-close.svg';
import Button from '../Button/Button.tsx';

export default function Navbar() {
  const [isBurgerMenuOpen, setBurgerIsOpen] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <Button
        className={styles.burger}
        onClick={() => setBurgerIsOpen(!isBurgerMenuOpen)}
      >
        {isBurgerMenuOpen ? <BurgerCloseIcon /> : <BurgerMenuIcon />}
      </Button>
    </nav>
  );
}
