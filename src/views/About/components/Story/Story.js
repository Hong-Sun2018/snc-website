/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Who are we
            </Typography>
            <Typography component={'p'}>
              We are innovators of this edge service solution, We are a group of creative people which have rich experience within areas of IT, industry, and business. 
            </Typography>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              <br />Mission and vision
            </Typography>
            <Typography component={'p'}>
              Our mission is developing a PaaS under the concept of Edge Computing and IoT, which can overcome the limitation of Cloud Computing in industrial application: 
              such as vender lock-in, cloud dependent, lack of data insight, privacy violation, long-time to market, and operation complexity.
            </Typography>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              <br />Research Experience
            </Typography>
            <Typography component={'p'}>
              · Digitalization framework for vertical plant systems. (2017)<br/>
              · Sensor station project. (2019)<br />
              · Testbed Kungsgatan project. (2019)<br/>
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
