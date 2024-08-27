'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Header from './components/Header';
import { Content } from './components/Content';

export default function Home() {
  return (
    <div id='screen' className={styles.appContainer}>
      <div className='App'>
        <Header />
        <Content />
      </div>
    </div>
  );
}
