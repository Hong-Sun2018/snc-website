/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Compare from '../../../../images/product/global.jpg';
import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import Image from 'next/image';

const mock = [
  {
    title: 'High Performance',
    subtitle:
      'The bare metal server provides the physical machine, which is completely exclusive and has high computing performance in the true sense.',
    suffix: '+',
  },
  {
    title: 'Nearby Service',
    subtitle:
      'Our edge servers are closer to the user and can provide low-latency and high-bandwidth services nearby.',
    suffix: '+',
  },
  {
    title: 'Global Coverage',
    subtitle: 'There are a large number of optional edge nodes, which can cover a variety of choices from all over the prefecture-level cities and three major operators in China, and the number of combinations can reach hundreds.',
    suffix: '%',
  },
  {
    title: 'Customizable',
    subtitle: 'Customizable physical servers of transmission, calculation and storage type can be provided according to the business requirements.',
    suffix: '%',
  },
];

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row-reverse' : 'column'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}
            component={Card}
            padding={4}
            borderRadius={2}
            width={1}
            data-aos={'fade-up'}
            data-aos-delay={100}
          >
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              P-Compute
            </Typography>
            <Typography variant={'h6'} color="text.secondary" textAlign={'justify'}> 
              P-Compute provides you with high-performance, secure and isolated physical servers dedicated to the cloud, 
              which can be delivered quickly. It is suitable for high-bandwidth, edge computing, edge storage and other 
              scenarios, and sinks resources to the nearest edge nodes, effectively reducing computing delay and cost.
            </Typography>
          </Box>
          <Grid container spacing={2}>
          {mock.map((item, i) => (
        <Grid item xs={12} sm={12} md={6} key={i}>
          <Box
            component={Card}
            padding={4}
            borderRadius={2}
            width={1}
            height={1}
            data-aos={'fade-up'}
            data-aos-delay={i * 200}
          >
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 500 }} color="primary">
                {item.title}
              </Typography>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'flex', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={200}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={Compare} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
