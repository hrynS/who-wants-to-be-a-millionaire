'use client';

import React, { useMemo } from 'react';
import { moneyFormatter, sortByNumberValue } from '@/lib/utils/index.ts';
import { useAppSelector } from '@/lib/store/hooks.ts';
import {
  currentLevelSelector,
  isSidebarOpenSelector,
} from '@/lib/features/Game/selectors/index.ts';
import classes from '@/lib/utils/styles.ts';
import { GameConfig } from '@/lib/features/Game/types/game.ts';
import PolygonButtonIcon from '../../../../../../public/polygon-button.svg';
import styles from './Sidebar.module.css';

interface SidebarProps {
  levels: GameConfig['levels'];
}

export default function Sidebar({ levels }: SidebarProps) {
  const currentLevel = useAppSelector(currentLevelSelector);
  const isSidebarOpen = useAppSelector(isSidebarOpenSelector);

  const sortedLevels = useMemo(
    () => sortByNumberValue(Object.keys(levels)),
    [levels],
  );

  const getLevelClasses = (level: number) => {
    if (level === currentLevel) {
      return classes(styles.level, styles.levelActive);
    }

    if (level < currentLevel) {
      return classes(styles.level, styles.levelInactive);
    }

    return styles.level;
  };

  return (
    <div
      className={classes(
        styles.levelsSidebar,
        isSidebarOpen ? styles.levelsSidebarOpen : '',
      )}
    >
      <ol>
        {sortedLevels.map((level) => (
          <li key={level} className={getLevelClasses(+level)}>
            <PolygonButtonIcon className={styles.polygonSvg} />
            {moneyFormatter(levels[+level].reward)}
          </li>
        ))}
      </ol>
    </div>
  );
}
