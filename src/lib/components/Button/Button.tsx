import React, { PropsWithChildren, ReactNode } from 'react';
import classes from '@/lib/utils/styles.ts';
import styles from './Button.module.css';

interface ButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  startAdornment?: ReactNode;
}

function Button({ children, className, onClick, startAdornment }: ButtonProps) {
  return (
    <button
      type="button"
      className={classes(className, styles.button)}
      onClick={onClick}
    >
      {startAdornment ? (
        <div className={styles.startAdornment}>{startAdornment}</div>
      ) : null}
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  onClick: undefined,
  startAdornment: null,
};

export default Button;
