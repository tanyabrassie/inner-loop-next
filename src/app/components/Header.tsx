import { Logo } from './Logo/Logo';
import { JazzyText } from './Typography';
import { EmailLink } from './EmailLink';
import headerStyles from './header.module.css';
import typographyStyles from './typography.module.css';

const Header = () => {
  return (
    <nav className={headerStyles.headerContainer}>
      <div className={headerStyles.links}>
        <a
          className={typographyStyles.link}
          href='https://store.innerloop.press/'
        >
          <JazzyText text='Store' />
        </a>
        <span className={headerStyles.circle}>&#9702;</span>
        <a
          className={typographyStyles.link}
          href='https://instagram.com/innerloop.press'
        >
          <JazzyText text='Insta' />
        </a>
      </div>
      <Logo />
      <div className={headerStyles.aboutContainer}>
        <div>
          <p className={headerStyles.aboutText}>
            <i>Printing information as art</i>
            <br></br>
            A small-batch risograph press
            <br /> <strong>Philadelphia, PA</strong>
          </p>
          <div className={headerStyles.sayHi}>
            <i>Say Hi:</i> <br />
            <EmailLink />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
