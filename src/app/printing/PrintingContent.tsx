import styles from './printingContent.module.scss';

export const PrintingContent = () => {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.innerContainer}>
        <h1 className={styles.header}>Printing Services</h1>
        <div className={styles.textContent}>
          <p>Have a project to print?</p>
          <p>
            We offer poster printing up to sizes of 11x17 in up to four colors.
            Our available colors to choose from include:
          </p>
          <ul className={styles.list}>
            <li> flourescent pink</li>
            <li> blue</li>
            <li> yellow</li>
            <li>bubblegum</li>
            <li> seafoam green</li>
            <li> bright </li>
            <li>red </li>
            <li> black</li>
          </ul>
          <h1 className={styles.header}>Pricing</h1>
          <p>
            Pricing depends on the complexity of the project and the amount of
            colors desired. If you have a project in mind, email
            tanya@innerloop.press to get a quote!
          </p>
        </div>
      </div>
    </main>
  );
};
