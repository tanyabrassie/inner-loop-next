'use client';
import { useState } from 'react';
import { JazzyText } from './Typography';
import emailLinkStyles from './emailLink.module.css';

export const EmailLink = (): JSX.Element => {
  const [showCopyNotif, setShowCopyNotif] = useState(false);
  const emailAddress = 'tanya@innerloop.press';
  const onEmailClick = () => {
    navigator.clipboard.writeText(emailAddress);
    triggerNotification();
  };

  const triggerNotification = () => {
    if (!showCopyNotif) {
      setShowCopyNotif(true);

      setTimeout(() => {
        setShowCopyNotif(false);
      }, 2000);
    }
  };

  return (
    <div className={emailLinkStyles.emailContainer}>
      {showCopyNotif && <div className={emailLinkStyles.notif}>Copied!</div>}
      <JazzyText
        className={emailLinkStyles.emailText}
        onClick={onEmailClick}
        text={emailAddress}
      />
    </div>
  );
};
