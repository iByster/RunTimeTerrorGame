
import { json, status } from '../../utils/restUtils';


const SERVER_BASE_URL = 'http://127.0.0.1:3001';

export default class PlayerController {
  updatePlayerScore(username: string, score:number) {
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');

    const antet = {
      method: 'PUT',
      headers: myHeaders,
      mode: 'cors' as RequestMode,
      body: JSON.stringify({username, score}),
    };

    const scoreUrl = SERVER_BASE_URL + '/updateScore';

    return fetch(scoreUrl, antet)
      .then(status)
      .then(json)
      .then((data) => {
        console.log('Request succeeded with JSON response', data);
        return data;
      })
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
  }
}
