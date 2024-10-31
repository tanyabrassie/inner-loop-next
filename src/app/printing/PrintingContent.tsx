import styles from './printingContent.module.scss';

export const PrintingContent = () => {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.innerContainer}>
        <h1 className={styles.header}>Printing Services</h1>
        <div className={styles.textContent}>
          <p>Have a project to print?</p>
          <p>We offer poster printing up to sizes of 11x17.</p>
          <p>
            Although we mostly print our own work, from time to time we have the
            capacity to print for others. If you have a printing project, hop on
            over to printing to take a look at our services, or send us an email
            at tanya@innerloop.press.
          </p>
        </div>
      </div>
    </main>
  );
};
