/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Iot from 'images/iot.jpg';0

const mock1 = [
  {
    title: 'Cloud Rendering',
    subtitle:
      'Support cloud desktop, cloud monitoring and cloud mobile phone​.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Edge AI',
    subtitle:
      'Support smart transportation, smart home, intelligent security and simultaneous interpretation.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
  },
  {
    title: 'Edge Serverless Service',
    subtitle:
      'Support web crawler, dial test and pressure test.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
]

const mock2=[
  {
    title: 'Real-Time Communication',
    subtitle:
      'Support real time industrial applications, such as in energy sectors, smart factories, robotics and internet of vehicles.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Distributed Audio and Video Service',
    subtitle: 'Support distributed transcoding, Cloud game, AR/VR.​',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

const Benefits = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            marginBottom={7}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
           Application Scenarios
      </Typography>
      <Box>
        <Image src={Iot} />
      </Box>
      <Grid container spacing={4}>
      {mock1.map((item, i) => (
        <Grid item xs={12} sm={12} md={4} key={i}>
          <Box
            component={Card}
            padding={4}
            borderRadius={2}
            width={1}
            height={1}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
          >
            <Box display={'flex'} flexDirection={'column'}>
              <Box
                component={Avatar}
                width={50}
                height={50}
                marginBottom={2}
                bgcolor={theme.palette.primary.main}
                color={theme.palette.background.paper}
              >
                {item.icon}
              </Box>
              <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 500 }}>
                {item.title}
              </Typography>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
    <Box>

    </Box>
    <Grid container spacing={4} marginTop={2}>
      {mock2.map((item, i) => (
        <Grid item xs={12} sm={6} md={6} key={i}>
          <Box
            component={Card}
            padding={4}
            borderRadius={2}
            width={1}
            height={1}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
          >
            <Box display={'flex'} flexDirection={'column'}>
              <Box
                component={Avatar}
                width={50}
                height={50}
                marginBottom={2}
                bgcolor={theme.palette.primary.main}
                color={theme.palette.background.paper}
              >
                {item.icon}
              </Box>
              <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 500 }}>
                {item.title}
              </Typography>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
    </Box>
    
  );
};

export default Benefits;
