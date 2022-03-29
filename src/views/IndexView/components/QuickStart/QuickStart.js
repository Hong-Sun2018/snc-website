/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import EdgeCloud from 'images/edge-cloud.png';

const QuickStart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            marginTop={4}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            A Highly Distrusted Edge Cloud
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
            textAlign="justify"
            marginTop={7}
            marginBottom={7}
          >
            Edge Cloud computing: referred to as edge cloud for short, 
            it is a cloud computing platform based on the core and edge computing capabilities 
            of cloud computing technology and built on edge infrastructure, it can provide comprehensive 
            capabilities such as computing, network, storage, security, etc. at the edge, and form the 
            technical framework of “cloud-edge collaboration” with the central cloud. By putting network 
            forwarding, storage, calculation, intelligent data analysis and other functions on the edge 
            nodes for processing, it can reduce the response time delay, the central cloud pressure, and 
            the bandwidth cost, and can provide cloud services such as network-wide scheduling and computing 
            power distribution.
          </Typography>
        </Box>
      </Box>
      <Box style={{maxWidth:'750px', marginLeft: 'auto', marginRight: 'auto'}}>
        <Image src={EdgeCloud} />
      </Box>
    </Box>
  );
};

export default QuickStart;
