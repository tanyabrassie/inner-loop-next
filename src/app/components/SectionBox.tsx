import sectionStyles from './sectionBox.module.css';

interface Props {
  sectionNuggetTitle: string;
  sectionTitle?: string;
  className?: string;
  children?: JSX.Element;
}

export const SectionBox = ({
  sectionNuggetTitle,
  sectionTitle,
  children,
}: Props): JSX.Element => {
  return (
    <section className={sectionStyles.container}>
      <strong className={sectionStyles.nuggetTitle}>
        {sectionNuggetTitle}
      </strong>
      {sectionTitle && <h1 className={sectionStyles.title}>{sectionTitle}</h1>}
      {children}
    </section>
  );
};
