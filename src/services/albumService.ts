import * as mysql from 'mysql';
import { Album } from './models';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'amanda',
  password: '123456',
  database: 'catalogo_albuns'
});

connection.connect();

export class AlbumService {
  getAllAlbums(): Promise<Album[]> {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM albums', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  getAlbumById(id: number): Promise<Album> {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM albums WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  }

  createAlbum(album: Album): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO albums SET ?', album, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.insertId);
        }
      });
    });
  }

  updateAlbum(id: number, album: Album): Promise<void> {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE albums SET ? WHERE id = ?', [album, id], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  deleteAlbum(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM albums WHERE id = ?', [id], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}
