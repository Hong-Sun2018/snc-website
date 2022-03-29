import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  GetStarted,
  Features1,
  Features2,
  QuickStart,
  QuickStart2,
  Services,
  Benefits,
  Hero,
} from './components';

const Products = () => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main colorInvert={true}>
        <Hero />
        <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, ${alpha(
              theme.palette.background.paper,
              0,
            )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
            backgroundRepeat: 'repeat-x',
            position: 'relative',
          }}   
          
        >
          <Container>
            <Features1 />
          </Container>
          <Container>
            <Features2 />
          </Container>
          {/*
          <Container>
            <Benefits />
          </Container>
          */}
          <Container maxWidth={1230}>
            <QuickStart />
          </Container>
          <Container maxWidth={1230}>
            <QuickStart2 />
          </Container>
          {/*
          <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
            sx={{
              width: '100%',
              marginBottom: theme.spacing(-1),
            }}
          >
            <path
              fill={theme.palette.background.paper}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            ></path>
          </Box>
          */}
        </Box>
      </Main>
    </Box>
  );
};

export default Products;
