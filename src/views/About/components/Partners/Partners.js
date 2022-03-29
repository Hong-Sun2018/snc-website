/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import HW from 'images/partners/hw.png';
import IN from 'images/partners/in.png';
import KTH from 'images/partners/kth.png';
import MS from 'images/partners/ms.png';
import TRCON from 'images/partners/trcon.png';
import TSG from 'images/partners/tsg.png';
import TUB from 'images/partners/tub.png';
import UIO from 'images/partners/uio.png';

const mock = [
  HW, KTH, MS, TUB, UIO
];

const mock2 = [
  IN, TRCON, TSG
];

const Partners = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={12}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }} textAlign={'center'} marginBottom={7}>
              Partners
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'} textAlign={'center'}>
              PolarEdge Cloud is founded by a group of tech gurus PhDs <br />
              from different academic and industrial institutions:
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container display={'flex'} alignItems={'center'} justifyContent={'center'} spacing={4}>
            {mock.map((item, i) => (
              <Grid item sx={6} sm={4} md={4} lg={4} xl={3}>
                <Box maxWidth={90} marginTop={2} marginRight={4} key={i} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                  <Image src={item} />
                </Box>
              </Grid>
            ))}
          </ Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }} textAlign={'center'} marginBottom={7} marginTop={10}>
              Supported By
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'} textAlign={'center'}>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container alignItems={'center'} justifyContent={'center'} spacing={4}>
            {mock2.map((item, i) => (
              <Grid item sx={12} sm={4} md={4} lg={4} xl={4}>
                <Box maxWidth={90} marginTop={2} marginRight={4} key={i} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                  <Image src={item} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Partners;
