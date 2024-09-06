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

import userFriendly from '../images/user-friendly.png';
import eWasteSpread from '../images/e-waste-spread.png';
import spaceTrashCover from '../images/space-trash-cover.webp';
import toxicLagoonsSpread from '../images/toxic-lagoons-southern-spread.jpg';
import leisurePoster from '../images/leisure.jpg';

const ContentContainer = styled.div`
  padding: 20px;
  background-color: black;
  /* background-color: #161616; */
  columns: 20rem;
`;

const Image = styled.img`
  width: 100%;
  padding: 20px;
  /* mix-blend-mode: screen; */
`;

const Text = styled.strong`
  padding: 30px 10px;
  display: inline-block;
  // color: red;
`;

export const RecentPrintContent = () => {
  return (
    <ContentContainer>
      <Image
        loading='lazy'
        src={toxicEarth.src}
        alt='Radioactive Land Poster'
      />

      <Image
        loading='lazy'
        src={eyePoster.src}
        alt='image of poster with an eye inspired imagery.'
      />

      <Image
        loading='lazy'
        src={spaceTrashSpread.src}
        alt='image of Space Trash zine.'
      />

      <Image
        loading='lazy'
        src={posturePoster.src}
        alt='image of Poster poster'
      />

      <Image
        loading='lazy'
        src={toxicLagoonsSpread.src}
        alt='Image of inside spread of Toxic Lagoons zine'
      />

      <Image src={trianglePile.src} alt='triangle pile poster image' />
      <Image
        loading='lazy'
        src={stretchPeach.src}
        alt='image of Data Zooms poster'
      />

      <Image
        loading='lazy'
        src={learningPoster.src}
        alt='image of Learning Poster'
      />

      <Image
        loading='lazy'
        src={leisurePoster.src}
        alt='scan of an inside spread of e-waste zine.'
      />

      <Image
        loading='lazy'
        src={spaceTrashCover.src}
        alt='Space Trash Zine cover'
      />

      <Image
        loading='lazy'
        src={sexyBook.src}
        alt='image of poster with an illustration of a sexy book on it.'
      />

      <Image
        loading='lazy'
        src={natureBlur.src}
        alt='image of Nature Blur Poster'
      />

      <Image
        loading='lazy'
        src={eWasteSpread.src}
        alt='scan of an inside spread of e-waste zine.'
      />

      <Image
        loading='lazy'
        src={dataZooms.src}
        alt='image of Data Zooms poster'
      />
      <Image
        loading='lazy'
        src={spacehouse.src}
        alt='image of Space House poster'
      />

      <Image
        loading='lazy'
        src={userFriendly.src}
        alt='scan of an user friendly zine cover.'
      />
      <Image loading='lazy' src={society.src} alt='image of Society poster' />
      <Text>...more coming soon!</Text>
    </ContentContainer>
  );
};
