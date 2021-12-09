import { Container, Box } from '@material-ui/core';
import React from 'react';
import { withNavbar } from '../../decorators/withNavbar';
import { LeaderBoardHeader } from './LeaderBoardHeader/LeaderBoardHeader';
import { LeaderBoardItem } from './LeaderBoardItem/LeaderBoardItem';

interface LeaderBoardProps {}

const LeaderBoard: React.FC<LeaderBoardProps> = ({}) => {
  let mock = [
    {
      profileImg: '',
      username: 'alexxxxx',
      score: 1000000,
      maxLvl: 4,
      rank: 1,
    },
    {
      profileImg: '',
      username: 'BOSS23',
      score: 9999,
      rank: 2,
      maxLvl: 3,
    },
    {
      profileImg: '',
      username: 'WOwLol',
      score: 5123,
      maxLvl: 2,
      rank: 3,
    },
    {
      profileImg: '',
      username: 'Georgel',
      score: 3456,
      maxLvl: 1,
      rank: 4,
    },
    {
      profileImg: '',
      username: 'alex',
      score: 100,
      maxLvl: 4,
      rank: 5,
    },
    {
      profileImg: '',
      username: 'alex',
      score: 100,
      maxLvl: 4,
      rank: 6,
    },
  ];

  return (
    <Container maxWidth="md">
      <LeaderBoardHeader />

      <Box
        sx={{
          //   bgcolor: 'red',
          width: '100%',
        }}
      >
        {mock.map((user) => (
          <LeaderBoardItem user={user} />
        ))}
      </Box>
    </Container>
  );
};

export default withNavbar(LeaderBoard);
// export default LeaderBoard;