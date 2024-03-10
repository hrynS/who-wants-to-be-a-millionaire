import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button.tsx';
import greetingImg from '../../../../public/greeting.svg';
import styles from './Greeting.module.css';

interface GreetingProps {
  summaryText?: string;
  headingText: string;
  buttonProps: {
    href: string;
    label: string;
  };
}

function Greeting({
  summaryText,
  headingText,
  buttonProps: { href, label },
}: GreetingProps) {
  return (
    <>
      <div className={styles.greetingImageContainer}>
        <Image
          src={greetingImg}
          alt="Greeting hand"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <section className={styles.section}>
        {summaryText ? <h2 className={styles.summary}>{summaryText}</h2> : null}
        <h1 className={styles.heading}>{headingText}</h1>
        <Link className={styles.link} href={href}>
          <Button>{label}</Button>
        </Link>
      </section>
    </>
  );
}

Greeting.defaultProps = {
  summaryText: '',
};

export default Greeting;
