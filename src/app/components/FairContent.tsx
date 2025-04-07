import styled, { keyframes } from 'styled-components';
import snowman from '../images/animated-snowman.gif';

const ContentContainer = styled.div`
  padding: 30px 20px 20px;
`;

const SnowmanImage = styled.img`
  flex-basis: auto;
  width: 40px;
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
  display: flex;
  flex-direction: column;
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
        <ListItem time={`.4s`}>
          <a href='https://artbookfair.eastcityart.com/'>
            Capital Art Book Fair - Apr 5-6, 2025
          </a>
        </ListItem>
        <ListItem time={``}>
          <a href='https://printphilly.org/printphilly-2025/'>
            printPhilly! - Apr 12, 2025
          </a>
        </ListItem>
        <ListItem time={``}>
          <a href='https://www.seattleartbookfair.org/'>
            Seattle Art Book Fair - May 11-12, 2025
          </a>
        </ListItem>
      </List>
    </ContentContainer>
  );
};

// {
//   /* <ListItem time={`.4s`}>
//           <a href='https://www.instagram.com/phillyzinefest/'>
//             Philly Zine Fest - Nov 9, 2024
//           </a>
//         </ListItem> */
// }
// {
//   /* <ListItem time={`.4s`}>
//           <a href='https://www.stapleandstitchfair.com/'>
//             Staple & Stitch - Nov 15-17, 2024
//           </a>
//         </ListItem> */
// }
// {
//   /* <ListItem time={`.4s`}>
//           <a href='https://risoprintfair.eastcityart.com/'>
//             DC Riso Fair - Nov 23-24, 2024
//           </a>
//         </ListItem>
//         <ListItem time={`.4s`}>
//           <a href='https://partiful.com/e/VVGNnhLLBbAHG3OhdnPC'>
//             Newark Zine Fest - Dec 7, 2024
//           </a>
//         </ListItem> */
// }
// {
//   /* <ListItem time={`.4s`}>
//           <a href='https://www.jerseyartbookfair.org/'>
//             Jersey Art Book Fair - February 2024
//           </a>
//         </ListItem>
//         <ListItem time={`.2s`}>
//           <a href='https://bostonartbookfair.com/'>
//             Boston Art Book Fair - November 2023
//           </a>
//         </ListItem>
//         <ListItem time={`0s`}>
//           <a href='https://laabf2023.printedmatterartbookfairs.org/'>
//             LA Art Book Fair - August 2023
//           </a>
//         </ListItem> */
// }
