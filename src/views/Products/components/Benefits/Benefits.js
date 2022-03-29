/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/styles';
import AI from '../../../../images/product/icons/ai.png';
import Security from '../../../../images/product/icons/security.png';
import Cloud from '../../../../images/product/icons/cloud.png';
import Gear from '../../../../images/product/icons/gear.png';
import Time from '../../../../images/product/icons/time.png';
import User from '../../../../images/product/icons/user.png';
import Image from 'next/image';


const Benefits = () => {
  const theme = useTheme();
  const mock = [
    {
      title: 'Openness',
      subtitle:
        'As a PaaS layer, the edge platform is hardware and cloud independent, which helps industry customers avoid vendor lock-in problems.',
      icon: (
        <Image height={100} width={100} src={User}/>
      ),
    },
    {
      title: 'Offline Support',
      subtitle:
        'Applications developed on the edge platform features cloud-native design, which is a future-proof design pattern based on microservice to enable large-scale deployment.',
      icon: (
        <Image height={100} width={100} src={AI}/>
      ),
    },
    {
      title: 'Cloud-Native Design:',
      subtitle:
        'The edge platform enables the offline self-maintenance capability to guarantee the quality of service during the loss of the Internet.',
      icon: (
        <Image height={100} width={100} src={Cloud}/>
      ),
    },
    {
      title: 'Minimized Time-to-Market:',
      subtitle:
        'The edge platform has native support for heterogeneous edge hardware and IoT protocols, enabling fast prototyping and solution development to minimize time-to-market.',
      icon: (
        <Image height={100} width={100} src={Time}/>
      ),
    },
    {
      title: 'Reduced Operation Complexity:',
      subtitle: 'Device monitoring and management, and application deployment are through a single panel of glass so as to guarantee easy operation.',
      icon: (
        <Image height={100} width={100} src={Gear}/>
      ),
    },
    {
      title: 'Enhanced Security:',
      subtitle:
        'Zero-trust security is integrated into the edge platform to guarantee enhanced security.',
      icon: (
        <Image height={100} width={100} src={Security} />
      ),
    },
  ];

  return (
    <Grid container spacing={4}>
      {mock.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
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
                // className={classes.iconBox}
                component={Avatar}
                width={70}
                height={70}
                marginBottom={2}
                bgcolor={alpha(theme.palette.primary.main, 0.1)}
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
  );
};

export default Benefits;
