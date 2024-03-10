import React, { PropsWithChildren } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
