import styled, { keyframes } from 'styled-components';
import featuredCover from '../images/dataCenters.jpg';

const ContentContainer = styled.div`
  padding: 0 20px 20px;
  min-height: 300px;
`;

const imageRotate = keyframes`
  0% {
    transform: rotate(1deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1deg);
  }
`;

const storeLink = 'https://www.store.innerloop.press/shop/p/data-centers-zine';

const Image = styled.img`
  width: 50%;
  padding: 20px 0;
  display: block;
  margin: auto;

  transform: rotate(1deg);
  mix-blend-mode: multiply;
  animation: 1s infinite alternate-reverse ${imageRotate};

  &:hover {
    filter: saturate(1.3);
    translate: 0 2px;
    animation-duration: 0.2s;
  }
`;

export const NewsContent = () => {
  return (
    <ContentContainer>
      <a href={storeLink}>
        <Image src={featuredCover.src} alt='image of data centers zine cover' />
      </a>
      Presenting Data Centers - a zine exploring the physical aspect of the
      internet! We don't think of them very often, and some might not even know
      they exist, but data centers are all around us. This new zine answers such
      questions as what is a data center, where are data centers, can data
      centers be harmful - and others!
    </ContentContainer>
  );
};
