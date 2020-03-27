import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';

const DesignedAndBuilt = () => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        designAndBuilt {
          image {
            publicURL
          }
          title
          description
        }
      }
    }
  `);
  const { image, title, description } = data.appClassicJson.designAndBuilt;

  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={image.publicURL} alt="Built Logo" />
          </div>
          <div className="content">
            <Heading content={title} />
            <Text content={description} />
            <Button title="Learn More" />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
