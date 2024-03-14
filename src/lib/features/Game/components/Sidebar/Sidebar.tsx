'use client';

import React, { useMemo } from 'react';
import styles from './Sidebar.module.css';
import { sortByNumberValue } from '@/lib/utils/index.ts';
import { moneyFormatter } from '@/lib/utils/index.ts';
import { useAppSelector } from '@/lib/store/hooks.ts';
import { currentLevelSelector } from '@/lib/features/Game/selectors.ts';
import classes from '@/lib/utils/styles.ts';
import PolygonButtonIcon from '../../../../../../public/polygon-button.svg';
import { GameConfig } from '@/lib/features/Game/types/game.ts';

interface SidebarProps {
  levels: GameConfig['levels'];
}

export default function Sidebar({ levels }: SidebarProps) {
  const currentLevel = useAppSelector(currentLevelSelector);
  const sortedLevels = useMemo(
    () => sortByNumberValue(Object.keys(levels)),
    [levels],
  );

  const getLevelClasses = (level: number) => {
    if (level === currentLevel) {
      return classes(styles.level, styles.levelActive);
    } else if (level < currentLevel) {
      return classes(styles.level, styles.levelInactive);
    } else {
      return styles.level;
    }
  };

  return (
    <div className={styles.levelsSidebar}>
      <ol>
        {sortedLevels.map((level) => (
          <li key={level} className={getLevelClasses(+level)}>
            <PolygonButtonIcon className={styles.polygonSvg} />
            {moneyFormatter(levels[level].reward)}
          </li>
        ))}
      </ol>
    </div>
  );
}
