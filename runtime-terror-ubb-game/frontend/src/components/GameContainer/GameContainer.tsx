import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Game from '../game/Game';
import './GameContainer.css';

interface GameContainerProps {}

export const GameContainer: React.FC<GameContainerProps> = () => {
  const { levelId } = useParams();
  const [timeUntilGameStart, setTimeUntilGameStart] = useState(3);

  useEffect(() => {
    //    Facem un countdown
    const countdownInterval = setInterval(() => {
      if (timeUntilGameStart > 0) {
        setTimeUntilGameStart(timeUntilGameStart - 1);
        // console.log('Ceva');
      }
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, [timeUntilGameStart]);

  if (timeUntilGameStart === 0) {
    return (
      <Container>
        <h1 className={'levelTitle'}>Level {levelId}</h1>
        <Game />
      </Container>
    );
  } else {
    return (
      <div className={'container'} style={{height: window.innerHeight, width: window.innerWidth}} id={'countdown'}>
        <h1 id={'countdownText'}>{timeUntilGameStart}</h1>
      </div>
    );
  }
};
