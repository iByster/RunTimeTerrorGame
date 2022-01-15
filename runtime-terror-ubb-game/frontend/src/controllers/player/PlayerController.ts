import { json, status } from '../../utils/restUtils';
import { Player } from './PlayerEntity';

const SERVER_BASE_URL = 'http://127.0.0.1:3001';

export default class PlayerController {
    createPlayer(player: Player) {
        const myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('Content-Type', 'application/json');
    
        const antet = {
          method: 'POST',
          headers: myHeaders,
          mode: 'cors' as RequestMode,
          body: JSON.stringify(player),
        };
    
        const registerUrl = SERVER_BASE_URL + '/createPlayer';
    
        return fetch(registerUrl, antet)
          .then(status)
          .then(json)
          .then((data) => {
            console.log('Request succeeded with JSON response', data);
            return data;
          })
          .catch(e => console.log(e));
      }

  updatePlayerScore(username: string, score:number) {
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    // myHeaders.append('Content-Type', 'application/json');

    // const newPlayer = new Player(username, score, '', '');

    const antet = {
      method: 'PUT',
      headers: myHeaders,
      mode: 'cors' as RequestMode,
      // body: JSON.stringify(newPlayer),
    };

    console.log(antet);

    const scoreUrl = SERVER_BASE_URL + `/updateScore?username=${username}&score=${score}`;

    return fetch(scoreUrl, antet)
      .then(status)
      .then(json)
      .then((data) => {
        console.log('Request succeeded with JSON response', data);
        return data;
      })
      .catch((e) => console.log(e));
  }

  getPlayersScore() {
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');

    const antet = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors' as RequestMode,
    };

    const scoreUrl = SERVER_BASE_URL + '/playerScores';

    return fetch(scoreUrl, antet)
      .then(status)
      .then(json)
      .then((data) => {
        console.log('Request succeeded with JSON response', data);
        return data;
      })
      .catch((e) => console.log(e));
  }
}
