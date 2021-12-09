
import { json, status } from '../../utils/restUtils';
import User from './UserEntity';

const SERVER_BASE_URL = 'http://127.0.0.1:3001';

export default class UserController {
  register(user: User) {
    // console.log('inainte de fetch post' + JSON.stringify(client));

    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');

    const antet = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors' as RequestMode,
      body: JSON.stringify(user),
    };

    const registerUrl = SERVER_BASE_URL + '/register';

    return fetch(registerUrl, antet)
      .then(status)
      .then(json)
      .then((data) => {
        console.log('Request succeeded with JSON response', data);
        return data;
      })
  }

  login(user: User) {
    // console.log('inainte de fetch post' + JSON.stringify(client));

    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');

    const antet = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors' as RequestMode,
      body: JSON.stringify(user),
    };

    const loginUrl = SERVER_BASE_URL + '/login';

    return fetch(loginUrl, antet)
      .then(status)
      .then(json)
      .then((data) => {
        console.log('Request succeeded with JSON response', data);
        return data;
      });
  }
}
