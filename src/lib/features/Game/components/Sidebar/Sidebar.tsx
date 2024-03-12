import React from 'react';
import styles from './Sidebar.module.css';
import { GameConfig } from "@/lib/features/Game/types/game.ts";
import { moneyFormatter, sortByNumberValue } from "@/lib/utils/index.ts";

interface SidebarProps  {
    levels: GameConfig['levels']
}


export default function Sidebar({ levels }: SidebarProps) {
    const sortedLevels = sortByNumberValue(Object.keys(levels));
  return (
    <div className={styles.levelsSidebar}>
      <ol>
          {sortedLevels.map((key: string) => <li key={key} className={styles.level}>{moneyFormatter(levels[key].reward)}</li>)}
      </ol>
    </div>
  );
}
