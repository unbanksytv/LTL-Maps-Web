import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Rating from 'common/src/components/Rating';
import Container from 'common/src/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import microsoft from 'common/src/assets/image/appClassic/microsoft.svg';
import bannerImg from 'common/src/assets/image/appClassic/mobileHeader.png';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
         
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Build the map of your own world"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="App  for  travel-loving  creators  to  publishphotos, tags and notes about the places theylove.  Follow  friends  and  get  rewarded  whenthey  upvote your photos. Tokens are used toplant trees. Earn additional tokens with everybooking driven from your unique content. We take the upvote button and turn it into a token transfer."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Join Waitlist" />
              <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="Watch Video"
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <Image src={bannerImg} alt="Banner" style={{width:"325px", position:"relative", left:"-100px", top:"-20px"}} />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
