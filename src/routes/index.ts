import express from 'express';
import * as albumController from '../controllers/albumController';

const router = express.Router();

router.get('/albums', albumController.getAllAlbums);
router.get('/albums/:id', albumController.getAlbumById);
router.post('/albums', albumController.createAlbum);
router.put('/albums/:id', albumController.updateAlbum);
router.delete('/albums/:id', albumController.deleteAlbum);

export default router;