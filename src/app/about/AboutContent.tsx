import styles from './aboutContent.module.scss';
import NextImage from 'next/image';
import innerLoopTable from '../images/table.webp';

export const AboutContent = () => {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.innerContainer}>
        {/* <NextImage
          className={styles.tablePhoto}
          alt='the inner loop press offerings'
          src={innerLoopTable}
        /> */}
        <div className={styles.textContent}>
          <h1 className={styles.header}>About</h1>

          <p>
            inner loop press is a risograph printing press operated by Tanya
            Brassie in Philadelphia, PA.
          </p>
          <p>
            It primarily publishes educational zines on topics related to the
            environment, technology and society, as well as posters and lighter
            fair!
          </p>
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.stockists}>Stockists</h1>

          <p>You can find inner loop press publications and prints at:</p>
          <ul>
            <li>
              <a href='https://partnersandson.com/'>Partners & Son</a>
              Philadelphia, PA
            </li>
            <li>
              <a href='https://www.noniphilly.com/'>Noni</a> Philadelphia, PA
            </li>
            <li>
              <a href='https://atomicbooks.com/'>Atomic Books</a>
              Balitmore, MD
            </li>
            <li>
              <a href='https://draw-down.com//'>Draw Down Books</a>
            </li>
            <li>
              <a href='https://printedmatter.org/'>Printed Matter</a>
              New York, NY
            </li>
            <li>
              <a href='https://quimbys.com/'>Quimby&apos;s</a>
              Chicago, IL
            </li>
          </ul>
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.stockists}>Fairs</h1>
          <ul>
            <li>
              Jersey Art Book Fair -
              <span className={styles.smallText}>2023, 2024</span>
            </li>
            <li>
              Multiple Formats -
              <span className={styles.smallText}>2023, 2024</span>
            </li>
            <li>
              Capital Art Book Fair -
              <span className={styles.smallText}>2023, 2024</span>
            </li>
            <li>
              Printed Matter LAABF -
              <span className={styles.smallText}>2023</span>
            </li>
            <li>
              Boston Art Book Fair -
              <span className={styles.smallText}>2023</span>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </main>
  );
};
