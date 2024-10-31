import styled from 'styled-components';
import dataZooms from '../images/localhost.webp';
import trianglePile from '../images/triangle-pile.webp';
import spacehouse from '../images/SpaceHouse.webp';
import society from '../images/society.webp';
import natureBlur from '../images/nature-blur.webp';
import stretchPeach from '../images/stretch-peach.webp';
import toxicEarth from '../images/radioactive-land.webp';
import sexyBook from '../images/sexy-book.webp';
import spaceTrashSpread from '../images/space-trash-spread.webp';
import posturePoster from '../images/posture-scan.webp';
import learningPoster from '../images/learning.webp';
import eyePoster from '../images/eye-doctor.webp';

import userFriendly from '../images/user-friendly.webp';
import eWasteSpread from '../images/e-waste-spread.png';
import spaceTrashCover from '../images/space-trash-cover.webp';
import toxicLagoonsSpread from '../images/toxic-lagoons-southern-spread.jpg';
import leisurePoster from '../images/leisure.webp';
import NextImage from 'next/image';

const ContentContainer = styled.div`
  padding: 20px;
  background-color: black;
  /* background-color: #161616; */
  columns: 200px 2;
  min-height: 100vh;
`;

const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
  padding: 20px;
  /* mix-blend-mode: screen; */
`;

const Text = styled.strong`
  padding: 30px 10px;
  display: inline-block;
`;

export const RecentPrintContent = () => {
  return (
    <ContentContainer>
      <Image
        loading={'eager'}
        priority={true}
        src={toxicEarth}
        alt='Radioactive Land Poster'
      />

      <Image
        src={eyePoster}
        alt='image of poster with an eye inspired imagery.'
      />

      <Image
        src={spaceTrashSpread}
        priority={true}
        alt='image of Space Trash zine.'
      />

      <Image src={posturePoster} alt='image of Poster poster' />

      <Image
        src={toxicLagoonsSpread}
        alt='Image of inside spread of Toxic Lagoons zine'
      />

      <Image src={trianglePile} alt='triangle pile poster image' />
      <Image src={stretchPeach} alt='image of Data Zooms poster' />

      <Image src={learningPoster} alt='image of Learning Poster' />

      <Image
        src={leisurePoster}
        loading={'lazy'}
        alt='scan of an inside spread of e-waste zine.'
      />

      <Image src={spaceTrashCover} alt='Space Trash Zine cover' />

      <Image
        src={sexyBook}
        alt='image of poster with an illustration of a sexy book on it.'
      />

      <Image src={natureBlur} alt='image of Nature Blur Poster' />

      <Image
        src={eWasteSpread}
        alt='scan of an inside spread of e-waste zine.'
      />

      <Image src={dataZooms} alt='image of Data Zooms poster' />
      <Image src={spacehouse} alt='image of Space House poster' />

      <Image src={userFriendly} alt='scan of an user friendly zine cover.' />
      <Image src={society} alt='image of Society poster' />
      <Text>...more coming soon!</Text>
    </ContentContainer>
  );
};
