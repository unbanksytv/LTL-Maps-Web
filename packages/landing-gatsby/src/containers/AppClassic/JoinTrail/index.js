import React from 'react';
// import { Link } from 'react-router-dom';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import JoinTrailArea, { ContentWrapper, ButtonGroup } from './joinTrail.style';

const JoinTrail = () => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        joinSlack {
          logo {
            publicURL
          }
          title
          description
        }
      }
    }
  `);
  const { logo, title, description } = data.appClassicJson.joinSlack;

  return (
    <JoinTrailArea id="trail">
      <ContentWrapper>
        <Fade up>
          <Image src={logo.publicURL} alt="Slack" />
        </Fade>
        <Fade up delay={100}>
          <Heading content={title} />
        </Fade>
        <Fade up delay={200}>
          <Text content={description} />
        </Fade>
        <Fade up delay={300}>
          <ButtonGroup>
            <a
              target="_blank"
              href="https://join.slack.com/t/ltlmaps/shared_invite/zt-d5xiq75i-tZNg6~xW10YmjwayZERFBg"
            >
              <Button title="Join with Slack" />
            </a>

            <a target="_blank" href="https://ltlmaps.herokuapp.com">
              <Button title="Login with Email" variant="textButton" />
            </a>
          </ButtonGroup>
        </Fade>
      </ContentWrapper>
    </JoinTrailArea>
  );
};

export default JoinTrail;
