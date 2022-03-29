import React from 'react';
import Image from 'next/image';
import { Link } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import HeaderLogo from '../../../../../../images/header_logo.png';
import NavItem from './components/NavItem';
import ThemeModeToggler from 'components/ThemeModeToggler';

const SidebarNav = ({ pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          alignItems={'center'}
          component="a"
          href="/"
          title="PolarEdge"
          width={{ xs: '200px', md: '200px'}}
          height={{xs: '17px', md: '17px'}}
        >
          <Image
            component={'img'}
            src={HeaderLogo}
          />
          <Box marginLeft={3} >
            <ThemeModeToggler />
          </Box>
          
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box paddingY={1}>
          <Link
            underline="none"
            component="a"
            href="/"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Home
          </Link>
        </Box>
        <Box paddingY={1}>
          <Link
            underline="none"
            component="a"
            href="/products"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Products
          </Link>
        </Box>
        <Box paddingY={1}>
          <Link
            underline="none"
            component="a"
            href="/about"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            About
          </Link>
        </Box>
        <Box paddingY={1}>
          <Link
            underline="none"
            component="a"
            href="/contact"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Contact
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
