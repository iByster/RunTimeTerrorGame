import { Avatar } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import './LeaderBoardItem.scss';
import style from './LeaderBoardItem.module.css';

interface LeaderBoardItemProps {
  user: {
    username: string;
    score: number;
    gender: string;
    score_timestamp: string;
  };
  rank: any;
}

export const LeaderBoardItem: React.FC<LeaderBoardItemProps> = ({ user, rank }) => {
  const rankFrameColor =
    // gold
    (rank === 0 && '#FFD700') ||
    // silver
    (rank === 1 && '#999B9B') ||
    // bronze
    (rank === 2 && '#CD7F32') ||
    // blue
    '#004174';

  // console.log(rankFrameColor);

  return (
    <div
      className={`pixel-borders pixel-borders--2 ${style['leader-board-items-container']}`}
      style={{ backgroundColor: rankFrameColor }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            minWidth: 300,
          }}
        >
          <Avatar
            alt={'Remy Sharp'}
            // src={user.profileImg}
            style={{
              width: 80,
              height: 80,
              marginRight: 10,
              border: '5px solid black',
            }}
          />
          <p className={style['leader-board-item-p']}>{user.username}</p>
        </Box>

        {/* <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '40px'
      }}> */}
        <p className={style['leader-board-item-p']} style={{ marginLeft: 40 }}>
          1
        </p>
      </Box>

      <p className={style['leader-board-item-p']}>{user.score}</p>

      {/* </Box> */}
    </div>
  );
};
