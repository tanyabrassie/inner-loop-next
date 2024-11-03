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
import bloomers from '../images/bloomers.webp';
import leisurePoster from '../images/leisure.webp';
import materialsSpread from '../images/materials-spread.webp';

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
        src={bloomers}
        alt='Blooming Flowers'
      />

      <Image
        loading={'eager'}
        priority={true}
        src={toxicEarth}
        alt='Radioactive Land Poster'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1000px) 25vw'
        src={eyePoster}
        priority={true}
        alt='image of poster with an eye inspired imagery.'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1000px) 25vw'
        src={posturePoster}
        priority={true}
        alt='image of Poster poster'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1000px) 25vw'
        src={spaceTrashSpread}
        priority={true}
        alt='image of Space Trash zine.'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1000px) 25vw'
        src={toxicLagoonsSpread}
        priority={true}
        alt='Image of inside spread of Toxic Lagoons zine'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1000px) 25vw'
        src={trianglePile}
        priority={true}
        alt='triangle pile poster image'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1000px) 25vw'
        src={stretchPeach}
        priority={true}
        alt='image of Data Zooms poster'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1000px) 25vw'
        src={learningPoster}
        priority={true}
        alt='image of Learning Poster'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1000px) 25vw'
        src={natureBlur}
        priority={true}
        alt='image of Nature Blur Poster'
      />

      <Image
        loading={'eager'}
        priority={true}
        src={materialsSpread}
        alt='Materials zine inside spread.'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 0200px) 50vw'
        src={leisurePoster}
        priority={true}
        alt='scan of an inside spread of e-waste zine.'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 0200px) 50vw'
        src={spaceTrashCover}
        priority={true}
        alt='Space Trash Zine cover'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1000px) 50vw'
        src={sexyBook}
        priority={true}
        alt='image of poster with an illustration of a sexy book on it.'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1000px) 50vw'
        src={eWasteSpread}
        priority={true}
        alt='scan of an inside spread of e-waste zine.'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1000px) 50vw'
        src={dataZooms}
        priority={true}
        alt='image of Data Zooms poster'
      />
      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 0200px) 50vw'
        src={spacehouse}
        priority={true}
        alt='image of Space House poster'
      />

      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1000px) 50vw'
        src={userFriendly}
        priority={true}
        alt='scan of an user friendly zine cover.'
      />
      <Image
        loading={'eager'}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px0 50vw'
        src={society}
        priority={true}
        alt='image of Society poster'
      />
      <Text>...more coming soon!</Text>
    </ContentContainer>
  );
};
