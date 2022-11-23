import axios from 'axios';
constant access_token = 'cmThyNZtxY6RZXCGZfkR'

const API_URL: string = 'https://the-one-api.dev/v2';

export function geLordBooks(): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get('${API_URL}/book')
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getLordOneBook(id): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get('${API_URL}/book/${id},{ headers:{'Authorization': 'token $ {access_token}'}})
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getLordMovies(): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get('${API_URL}/movie,{ headers:{'Authorization': 'token $ {access_token}'}})
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getLordOneMovie(id): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get('${API_URL}/movie/${id},{ headers:{'Authorization': 'token $ {access_token}'}})
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getLordCharacters(): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get('${API_URL}/character,{ headers:{'Authorization': 'token $ {access_token}'}})
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getLordOneCharacter(id): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get('${API_URL}/character/${id},{ headers:{'Authorization': 'token $ {access_token}'}})
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export default {getLordBooks,getLordOneBook,getLordMovies,getLordOneMovie,getLordCharacters,getLordOneCharacter};