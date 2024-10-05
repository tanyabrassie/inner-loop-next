import styled, { keyframes } from 'styled-components';

const ContentContainer = styled.div`
  padding: 30px 20px 20px;
`;

const bulletPointParty = keyframes`
  0% {
    color: #f86bff;
  }
  100% {
    color: #4203ff;
  }`;

const List = styled.ul`
  padding: 10px 0;
`;

const ListItem = styled.li<{ time: string }>`
  list-style-type: none;
  margin-inline-start: 5px;

  a {
    text-decoration: none;
    padding-bottom: 5px;
    color: black;

    &:hover {
      border-bottom: 1px solid black;
    }
  }

  &::before {
    content: '⎗';
    display: inline-block;
    font-weight: 800;
    font-size: 27px;
    vertical-align: sub;
    padding-right: 10px;
    color: #f86bff;
    animation: 1s linear 1s infinite alternate none running ${bulletPointParty};
    animation-delay: ${(props) => props.time};
  }
`;

const SectionHeader = styled.h2`
  font-weight: bold;
  font-size: 12px;
`;

export const FairContent = ({ test }: any) => {
  return (
    <ContentContainer>
      <SectionHeader>Upcoming Events</SectionHeader>
      <List>
        {/* <ListItem time={`.4s`}>Fall events to be announced!</ListItem> */}
        <ListItem time={`.4s`}>
          <a href='https://www.instagram.com/phillycomicsexpo/'>
            Philly Comics Expo - Oct 12, 2024
          </a>
        </ListItem>
        <ListItem time={`.4s`}>
          <a href='https://www.instagram.com/phillyzinefest/'>
            Philly Zine Fest - Nov 9, 2024
          </a>
        </ListItem>
        {/* <ListItem time={`.4s`}>
          <a href='https://www.stapleandstitchfair.com/'>
            Staple & Stitch - Nov 15-17, 2024
          </a>
        </ListItem> */}
        {/* <ListItem time={`.4s`}>
          <a href='https://www.jerseyartbookfair.org/'>
            Jersey Art Book Fair - February 2024
          </a>
        </ListItem>
        <ListItem time={`.2s`}>
          <a href='https://bostonartbookfair.com/'>
            Boston Art Book Fair - November 2023
          </a>
        </ListItem>
        <ListItem time={`0s`}>
          <a href='https://laabf2023.printedmatterartbookfairs.org/'>
            LA Art Book Fair - August 2023
          </a>
        </ListItem> */}
      </List>
    </ContentContainer>
  );
};
