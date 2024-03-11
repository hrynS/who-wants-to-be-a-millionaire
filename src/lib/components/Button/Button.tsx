import React, { PropsWithChildren, ReactNode } from 'react';
import styles from './Button.module.css';
import classes from "@/lib/utils/styles.ts";

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
      <div className={styles.startAdornment}>
        {startAdornment || null}
      </div>
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
