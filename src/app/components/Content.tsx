import styled from 'styled-components';
import { SectionBox } from './SectionBox';
import { RecentPrintContent } from './RecentPrints';
import { NewsContent } from './NewsContent';

import { FairContent } from './FairContent';
import { LoadScreen } from './LoadScreen';
// import { ServicesContent } from "./ServicesContent";

const ContentSection = styled.main`
  padding: 40px;
  width: calc(100% - 5%);
  justify-content: center;
  position: relative;

  display: grid;
  margin: auto;

  grid-gap: 40px;

  grid-template-areas: 'recent sticky';
  grid-template-columns: 65% 35%;

  @media screen and (max-width: 1024px) {
    display: unset;
    padding: 0px;
  }
`;

const RecentPrints = styled(SectionBox)`
  grid-area: recent;
`;

const News = styled(SectionBox)``;

// const Services = styled(SectionBox)``;

const Fairs = styled(SectionBox)``;

const StickyColumn = styled.section`
  grid-area: sticky;
  position: sticky;
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  top: 40px;
  align-self: start;

  @media screen and (max-width: 1024px) {
    /* position: relative; */
    margin: 40px 0;
  }
`;

export const Content = () => {
  return (
    <>
      <LoadScreen />
      <ContentSection>
        <RecentPrints sectionNuggetTitle='featured'>
          <RecentPrintContent />
        </RecentPrints>
        <StickyColumn>
          <News sectionNuggetTitle='extra extra!'>
            <NewsContent />
          </News>

          <Fairs sectionNuggetTitle='fairs & things'>
            <FairContent />
          </Fairs>

          {/* <Services sectionNuggetTitle="printing services">
            <ServicesContent />
          </Services> */}
        </StickyColumn>
      </ContentSection>
    </>
  );
};
