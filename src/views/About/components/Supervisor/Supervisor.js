import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Supervisor = () => {
  const theme = useTheme();

  const mock = [
    {
      name: 'Amir Taherkordi',
      title: <>
        <Typography textAlign="center">University of Oslo</Typography>
        <Typography textAlign="center">Associate Professor</Typography>
      </>,
      desc: 
        <Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' , textAlign: 'justify',}} >
          Rich experiences in distributed computing and software engineering aspects 
          of emerging technologies, such as the Internet of Things, clouds and 
          fogs/edges, cyber-physical systems, and smart grids. etc.
        </Typography>
 
    },
    {
      name: 'Frank Eliassen',
      title: <>
        <Typography textAlign="center">University of Oslo</Typography>
        <Typography textAlign="center">Professor</Typography>
      </>,
      desc: <Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,textAlign: 'justify'}} >
              Rich experience in service-oriented IoT/edge/fog computing and CPS 
              middleware and programming models in application areas, including smart 
              cities and smart grids, adaptive software systems, autonomic systems, peer-to- 
              peer systems, and cooperative micro-grids.
            </Typography>
    },
    {
      name: 'Xiaopeng Li',
      title: <>
        <Typography textAlign="center">Microsoft Norway</Typography>
        <Typography textAlign="center">Cloud&AI Business Lead</Typography>
      </>,
      desc: <Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,textAlign: 'justify'}} >
              Xiaopeng leads the go-to-market strategy and execution of Microsoft Azure. 
              Prior to that, Xiaopeng worked as an AI Advisor at Crayon Inmeta where he 
              operated at the intersection of management consulting and data science. 
              Xiaopeng led strategy and product development at Telia Company's data 
              insights business unit.
            </Typography>
    },
    {
      name: 'Haakon Bryhni',
      title: <>
        <Typography textAlign="center">SimulaMet Centre for Digital</Typography>
        <Typography textAlign="center">Research Professor</Typography>
      </>,
      desc: <Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,textAlign: 'justify'}} >
              Serial investor and entrepreneur; Haakon Bryhni holds a PhD in high speed 
              communication and multiprocessor server systems from University of Oslo. 
              Bryhni co-founded the Nunatak and bryhni.com venture companies in 2001, 
              investing in early-stage technology ventures related to ICT including 3d-Radar 
              (sold and later re-aquired), Faster Imaging (sold), Squarehead Technology, 
              Media Network Services, TransPacket, Elliptic Laboratories, Fabriscale 
              Technologies, Troll Housing, Famweek and Explain. Bryhni served as COO 
              and CTO in Elliptic Labs from 2012-16 developing touchless technologies 
              based on ultrasound from research to shipping products. Bryhni is currently 
              an advisor and board member in his portfolio companies.
            </Typography>
    },
  ];

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Supervisors
        </Typography>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          &nbsp;
        </Typography>
        <Typography variant="h6" align={'center'} color={'text.secondary'}>
          
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              component={Card}
              boxShadow={0}
              variant={'outlined'}
              bgcolor={'alternate.main'}
            >
              <CardContent sx={{ padding: 3 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemText
                    style={{display:'flex', flexDirection: 'column', alignItems:'center'}}
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{ variant: 'h6', fontWeight: 700 }}
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
                <Box style={{paddingTop: '20px',}}>
                  {item.desc}
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Supervisor;
