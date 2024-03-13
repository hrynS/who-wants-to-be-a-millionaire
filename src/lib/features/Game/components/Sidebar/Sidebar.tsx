'use client';

import React, { useMemo } from 'react';
import styles from './Sidebar.module.css';
import { sortByNumberValue } from '@/lib/utils/index.ts';
import { moneyFormatter } from '@/lib/utils/index.ts';
import { useAppSelector } from '@/lib/store/hooks.ts';
import {
  currentLevelSelector,
  levelsSelector,
} from '@/lib/features/Game/selectors.ts';
import classes from '@/lib/utils/styles.ts';
import PolygonButtonIcon from '../../../../../../public/polygon-button.svg';

export default function Sidebar() {
  const levels = useAppSelector(levelsSelector);
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
        {sortedLevels.map((key: string) => (
          <li key={key} className={getLevelClasses(+key)}>
            <PolygonButtonIcon className={styles.polygonSvg} />
            {moneyFormatter(levels[key].reward)}
          </li>
        ))}
      </ol>
    </div>
  );
}
