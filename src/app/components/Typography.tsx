import typographyStyles from './typography.module.css';

export const JazzyText = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
  className?: string;
}): JSX.Element => {
  const textArray = text.split('');

  const JazzyText = textArray
    .map((letter, index) => {
      return index % 2 ? (
        letter
      ) : (
        <span className={typographyStyles.jazzyLetter} key={index}>
          {letter}
        </span>
      );
    })
    .concat();
  return (
    <span className={typographyStyles.jazzyLetters} onClick={onClick}>
      {JazzyText}
    </span>
  );
};
