import { Box } from '@mui/system';
import React, {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PlayerController from '../../controllers/player/PlayerController';
import useInterval from '../../hooks/useInterval';
import { useAuthContext } from '../../providers/AuthProvider/AuthProvider';
import { usePlayerContext } from '../GameContainer/GameContainer';
import Player from '../player/Player';
import './Game.css';

interface DeadContextInterface {
  dead: boolean;
}

export const DeadContext = createContext<DeadContextInterface>(
  {} as DeadContextInterface
);

export function useDeadContext() {
  return useContext(DeadContext);
}

const Game = forwardRef((props, ref) => {
  const playerRef = useRef<any>(null);
  const [userLife, setUserLife] = useState(100);
  const [userScore, setUserScore] = useState(0);
  const [isPlayerDead, setIsPlayerDead] = useState(false);
  const playRefContext = usePlayerContext();
  const { levelId } = useParams();
  const navigate = useNavigate();
  const playerController = new PlayerController();
  const userContext = useAuthContext();

  useImperativeHandle(ref, () => ({
    damageTaken() {
      if (userLife > 0) {
        setUserLife(userLife - 10);
      }
    },
  }));

  useInterval(() => {
    if (!isPlayerDead) {
      setUserScore(userScore + 100);
    }
  }, 1000);

  useEffect(() => {
    if (userLife === 0) {
      // * game over
      setIsPlayerDead(true);

      playerController.updatePlayerScore(
        userContext.userProfile.username,
        userScore
      );

      setTimeout(() => {
        navigate('/levels');
      }, 5000);
    }
  }, [userLife, navigate, playerController, userContext, userScore]);

  useEffect(() => {
    if (playerRef?.current) {
      playRefContext.playerRef(playerRef);
    } else {
      return;
    }
  }, [playerRef, playRefContext]);

  //Jocul se desfasoara aici
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>Life: {userLife}</label>
        <h1>{!isPlayerDead ? `Level ${levelId}` : `Game Over`}</h1>

        <label>Score: {userScore}</label>
      </Box>
      <DeadContext.Provider value={{ dead: isPlayerDead }}>
        <Player ref={playerRef} />
      </DeadContext.Provider>
    </div>
  );
});

export default Game;
