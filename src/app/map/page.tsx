import styles from './map.module.scss';

const Page = () => {
  return (
    <main className={styles.mainWrapper}>
      <iframe
        src='https://www.google.com/maps/d/u/0/embed?mid=1pEkiQVxRWD3PUC7faAlUBzAhNDIpnL0&ehbc=2E312F&noprof=1'
        width='100%'
        height='100%'
      ></iframe>
    </main>
  );
};

export default Page;
