import * as mysql from 'mysql';
import { Artist } from './models';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'amanda',
  password: '123456',
  database: 'catalogo_albuns'
});

connection.connect();

export class ArtistService {
  getAllArtists(): Promise<Artist[]> {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM artists', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  getArtistById(id: number): Promise<Artist> {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM artists WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  }

  createArtist(artist: Artist): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO artists SET ?', artist, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.insertId);
        }
      });
    });
  }

  updateArtist(id: number, artist: Artist): Promise<void> {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE artists SET ? WHERE id = ?', [artist, id], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  deleteArtist(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM artists WHERE id = ?', [id], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}
