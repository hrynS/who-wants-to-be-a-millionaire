'use client';

import React from 'react';
import styles from './Sidebar.module.css';
import { GameConfig } from '@/lib/features/Game/types/game.ts';
import { sortByNumberValue } from '@/lib/utils/index.ts';
import { moneyFormatter } from '@/lib/utils/index.ts';
import { useAppSelector } from "@/lib/store/hooks.ts";
import { currentLevelSelector } from "@/lib/features/Game/selectors.ts";
import classes from "@/lib/utils/styles.ts";

interface SidebarProps {
  levels: GameConfig['levels'];
}

export default function Sidebar({ levels }: SidebarProps) {
  const currentLevel = useAppSelector(currentLevelSelector);
  const sortedLevels = sortByNumberValue(Object.keys(levels));

  const getLevelClasses = (level: number) => {
    if (level === currentLevel) {
      return classes(styles.level, styles.levelActive)
    } else if (level < currentLevel) {
      return classes(styles.level, styles.levelInactive)
    } else {
      return styles.level;
    }
  }

  return (
    <div className={styles.levelsSidebar}>
      <ol>
        {sortedLevels.map((key: string) => (
          <li key={key} className={getLevelClasses(+key)}>
            {moneyFormatter(levels[key].reward)}
          </li>
        ))}
      </ol>
    </div>
  );
}
