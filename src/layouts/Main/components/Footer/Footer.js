import React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import FooterLogo from '../../../../images/footer_logo.png';
import Instagram from 'images/social/insta.png';
import Telegram from 'images/social/telegram.png';
import Twitter from 'images/social/twitter.png';
import Linked from 'images/social/linked.png';
import Facebook from 'images/social/facebook.png';


const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          flexDirection={{ xs: 'column', sm: 'column', md: 'row'}}
          marginBottom={'20px'}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="PolarEdge"
            height={'85px'}
            width={{sm: '33%',  xs:'100%'}}
            justifyContent={{xs:'center',sm:'center', md:'left'}}
          >
            <Image
              width={110}
              component={'img'}
              src={FooterLogo}
            />
          </Box>
          <Box marginTop={'20px'} width={{sm: '33%',  xs:'100%'}}>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} >
              <Link >
                <Button marginLeft={3} marginRight={3} >
                  <Image src={Linked} height={30} width={30}/>
                </Button>
              </ Link>
              <Link>
                <Button marginLeft={3} marginRight={3}>
                  <Image src={Facebook}  height={30} width={30} />
                </Button>
              </Link>
              <Link>
                <Button marginLeft={3} marginRight={3}>
                  <Image src={Twitter} height={30} width={30}/>
                </Button>
              </Link>
            </Box>
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'} justifyContent={{xs:'center',sm:'center', md:'right'}} marginTop={'20px'} width={{sm: '33%',  sx:'100%'}}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/products"
                color="text.primary"
                variant={'subtitle2'}
              >
                Products
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/About"
                color="text.primary"
                variant={'subtitle2'}
              >
                About
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/contact"
                color="text.primary"
                variant={'subtitle2'}
              >
                Contact
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; PolarEdge. 2022, PolarEdge all rights reserved.
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
