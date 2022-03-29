import React from 'react';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Story,
  Team,
  Partners,
} from './components';
import Supervisor from './components/Supervisor';

const About = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <Story />
      </Container>
      {/*
      <Container paddingTop={'0 !important'}>
        <WhoWeAre />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      */}
      <Container>
        <Partners />
      </Container>
      {/*
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Partners />
        </Container>
      </Box>
      <Contact />
      <Container>
        <Gallery />
      </Container>
      <Container maxWidth={800} paddingTop={'0 !important'}>
        <Application />
      </Container>
      */}
    </Main>
  );
};

export default About;
