/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Roadmap from '../../../../images/product/edge.jpeg';
import Image from 'next/image';

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
            marginBottom={7}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            P-AI
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            Bring artificial intelligence to the proximity of IoT applications and enable real-time AI operations with 
            native security support, leveraging federated learning and privacy computing.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Image src={Roadmap} />
      </Box>
    </Box>
  );
};

export default QuickStart;
