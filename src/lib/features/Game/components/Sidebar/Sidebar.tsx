import React from 'react';
import { classes } from "@/lib/utils/index.ts";
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.levelsSidebar}>
      <ol>
        <li className={styles.level}>$1,000,000</li>
        <li className={classes(styles.level, styles.levelActive)}>$500,000</li>
        <li className={classes(styles.level, styles.levelDisabled)}>$250,000</li>
      </ol>
    </div>
  );
}
