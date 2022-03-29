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
import Idea from '../../../../images/product/business_idea.png';
import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import Image from 'next/image';

const mock = [
  {
    title: 'Edge Heterogeneity',
    subtitle:
      'Aiming at the heterogeneous network environment, an intelligent scheduling algorithm is designed to ensure that the business is not affected by the complexity of the environment.',
    suffix: '+',
  },
  {
    title: 'Cloud-Edge Collaboration',
    subtitle:
      'The edge orchestration architecture based on Kubernetes can connect edge computing and cloud services and achieve cloud-edge integration and collaboration.',
    suffix: '+',
  },
  {
    title: 'Use Agile',
    subtitle: 'Support console and API management, container creation in second-level, flexible expansion, flexible start and stop.',
    suffix: '%',
  },
  {
    title: 'Nearby Service',
    subtitle: 'Our edge servers are closer to the user and can provide low-latency and high-bandwidth services nearby.',
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
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
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
              P-PaaS
            </Typography>
            <Typography variant={'h6'} color="text.secondary" textAlign={'justify'}> 
              Based on and fully compatible with native Kubernetes, P-PaaS can provide 
              container-centered management services. It has the functions of security 
              isolation, high resource utilization, second-level flexibility, light 
              operation and maintenance, and gray-scale release. It supports unified 
              orchestration and rapid service access, and can help users easily realize 
              cloud-edge integration and collaboration.
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
              <Image src={Idea} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
