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
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Lan from '../../../../images/team/lan.png';
import Liu from '../../../../images/team/harry-liu.png';
import Jay from '../../../../images/team/jay-zhu.png';
import Hong from '../../../../images/team/hong.png';
import Masha from '../../../../images/team/masha.png';
import Image from 'next/image';
import { makeStyles  } from '@material-ui/styles';

const Team = () => {
  const theme = useTheme();

  const DescWrap = ({children}) => {
    // const classes = useStyles();
    return (
      <Box style={{display: 'flex', flexDirection: 'row',  }}>
        <Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >·&nbsp;</Typography>
          {children}
      </Box>
    );
  }

  const mock = [
    {
      name: 'Dylan Lan',
      title: 'Manage Director',
      avatar: ( <Box width={100} height={100} borderRadius={50} overflow="hidden"><Image src={Lan} width={100} height={100} /></Box> ),
      desc: (
        <> 
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >PhD in Edge computing</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Msc in ICT Innovation</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >5 years experiences in IT</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}}>CTO and Co-founder of Citycharge AS</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}}>6 Patents in Internet of Things</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Several high quality paper published</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >PhD in Edge computing</Typography></DescWrap>     
        </>
      ),
    },
    {
      name: 'Harry Liu',
      title: 'Technical Development Lead',
      avatar: ( <Box width={100} height={100} borderRadius={50} overflow="hidden"><Image src={Liu} width={100} height={100} /></Box> ),
      desc: (
        <>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >PhD in IoT and edge/cloud computing</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Msc in ICT Innovation</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >5 years experiences in IoT</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Swedish Embedded 2018 award winner</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Embedded Conference Scandinavia 2019 invited speaker</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >2 Patents in IoT</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Several high quality paper published</Typography></DescWrap>
        </>
      ),
    },
    {
      name: 'Jay Zhu',
      title: 'Security Lead',
      avatar: ( <Box width={100} height={100} borderRadius={50} overflow="hidden"><Image src={Jay} width={100} height={100} /></Box> ),
      desc: (
        <>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >PhD in system security</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Msc in SKLOIS</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >10 years experiences in system security and distributed systems</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >More than 10 papers and two patents</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Lead cryptography engineer in technology innovation center</Typography></DescWrap>
        </>
      ),
    },
    {
      name: 'Mahsa Motevallian',
      title: 'Business Development',
      avatar: ( <Box width={100} height={100} borderRadius={50} overflow="hidden"><Image src={Masha} width={100} height={100} /></Box> ),
      desc: (
        <>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Msc in Environmental Studies</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Research assistant before in University of Oslo</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Research on transition for digitalization</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Research on ICT business models</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Research on apply machine learning for analysing environmental data</Typography></DescWrap>
        </>
      ),
    },
    {
      name: 'Hong Sun',
      title: 'Fullstack Developer',
      avatar: ( <Box width={100} height={100} borderRadius={50} overflow="hidden"><Image src={Hong} width={100} height={100} /></Box> ),
      desc: (
        <>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >BA in Industrial Engineering</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >BA in Software Technology</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >Msc in Total Quality Maintenance</Typography></DescWrap>
          <DescWrap><Typography style={{marginTop: '10px', display: 'block',fontSize: 13,fontWeight: 'bold' ,}} >2 years of fullstack development</Typography></DescWrap>
        </>
      ),
    }
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
          Our Team
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
                  <ListItemAvatar sx={{ marginRight: 3 }}>
                    {item.avatar}
                  </ListItemAvatar>
                  <ListItemText
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

export default Team;
