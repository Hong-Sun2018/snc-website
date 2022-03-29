/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Utility from '../../../../images/product/utility.png';
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
            P-Box
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            A unified, customizable, and scalable hardware solution catering to the very needs of industrial IoT applications, 
            featuring the most popular industrial protocols.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Image src={Utility} />
      </Box>
    </Box>
  );
};

export default QuickStart;
