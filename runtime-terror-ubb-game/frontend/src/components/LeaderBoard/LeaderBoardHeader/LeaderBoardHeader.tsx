import { Box } from '@mui/system';
import React from 'react';

interface LeaderBoardHeaderProps {}

export const LeaderBoardHeader: React.FC<LeaderBoardHeaderProps> = ({}) => {
  return (
    <Box
      sx={{
        // backgroundColor: 'red',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          //   backgroundColor: 'blue',

          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          //   justifyContent: 'space-between',
        }}
      >
        <p
          style={{
            fontSize: '25px',
            marginLeft: '100px',
            marginRight: '140px',
          }}
        >
          USR.
        </p>
        {/* 
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '5px',
            marginRight: '190px'
          }}
        > */}
        <p style={{ fontSize: '25px', marginRight: '70px' }}>LVL.</p>
        <p style={{ fontSize: '25px' }}>SCR.</p>
        {/* </Box> */}
      </Box>
    </Box>
  );
};
