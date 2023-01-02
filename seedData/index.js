import userModel from '../api/users/userModel';
import users from './users';
import dotenv from 'dotenv';
import genreModel from '../api/genres/genreModel'
import genres from './genres'
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';

dotenv.config();

// deletes all user documents in collection and inserts test data
// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

if (process.env.SEED_DB === 'true') {
  loadUsers();
}