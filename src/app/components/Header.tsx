import { Logo } from './Logo/Logo';
import { JazzyText } from './Typography';
import { EmailLink } from './EmailLink';
import headerStyles from './header.module.css';
import typographyStyles from './typography.module.css';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.headerContainer}>
        <div className={headerStyles.links}>
          <a
            className={typographyStyles.link}
            href='https://store.innerloop.p/'
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
            <h1 className={headerStyles.aboutText}>
              {/* <i>Printing information as art</i> */}
              <br></br>
              A small-batch,
              <br />
              risograph <br /> printing press
              <br />
              located in <br />
              <strong>Philadelphia, PA</strong>
            </h1>
            <div className={headerStyles.sayHi}>
              <i>Contact:</i> <br />
              <EmailLink />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
