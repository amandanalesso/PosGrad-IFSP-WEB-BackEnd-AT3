const express = require('express');
import { createAlbum, deleteAlbum, getAllAlbums, getAlbumById, updateAlbum } from './controllers/albumController';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/albums', getAllAlbums);
app.get('/albums/:id', getAlbumById);
app.post('/albums', createAlbum);
app.put('/albums/:id', updateAlbum);
app.delete('/albums/:id', deleteAlbum);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
