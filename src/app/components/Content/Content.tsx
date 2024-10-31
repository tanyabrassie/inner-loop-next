'use client';
import { SectionBox } from '../SectionBox';
import { RecentPrintContent } from '../RecentPrints';
import { NewsContent } from '../NewsContent';
import contentStyles from './content.module.css';

import { FairContent } from '../FairContent';
// import { ServicesContent } from "./ServicesContent";

// const Services = styled(SectionBox)``;

export const Content = () => {
  return (
    <>
      <main className={contentStyles.contentSection}>
        {/* RECENT PRINTS */}
        <SectionBox
          className={contentStyles.recentPrints}
          sectionNuggetTitle='featured'
        >
          <RecentPrintContent />
        </SectionBox>
        <section className={contentStyles.stickyColumn}>
          {/* NEWS */}
          <SectionBox sectionNuggetTitle='extra extra!'>
            <NewsContent />
          </SectionBox>

          {/* FAIRS */}
          <SectionBox sectionNuggetTitle='fairs & things'>
            <FairContent />
          </SectionBox>

          {/* <Services sectionNuggetTitle="printing services">
            <ServicesContent />
          </Services> */}
        </section>
      </main>
    </>
  );
};
