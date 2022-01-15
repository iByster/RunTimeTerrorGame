import { Container, Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { withNavbar } from '../../decorators/withNavbar';
import { LeaderBoardHeader } from './LeaderBoardHeader/LeaderBoardHeader';
import { LeaderBoardItem } from './LeaderBoardItem/LeaderBoardItem';
import { Player } from '../../controllers/player/PlayerEntity';
import PlayerController from "../../controllers/player/PlayerController";

interface LeaderBoardProps {}

const LeaderBoard: React.FC<LeaderBoardProps> = ({}) => {
  const [players, setPlayers] = useState<Player[]>();
  const playerController = new PlayerController();
  
  useEffect(() => {
    const init = async () => {
      const playersRes = await playerController.getPlayersScore();
      setPlayers(playersRes);
    }

    init();
  }, []);

  return (
    <Container maxWidth="md">
      <LeaderBoardHeader />

      <Box
        sx={{
          //   bgcolor: 'red',
          width: '100%',
        }}
      >
        {players && players.map((user, index) => (
          <LeaderBoardItem user={user} rank={index} key={user.username}/>
        ))}
      </Box>
    </Container>
  );
};

export default withNavbar(LeaderBoard);
// export default LeaderBoard;