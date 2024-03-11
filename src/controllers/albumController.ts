import { Request, Response } from 'express';
import { Album } from '../models/models';
import { AlbumService } from '../services/albumService';

const albumService = new AlbumService();

export const getAllAlbums = async (req: Request, res: Response) => {
  try {
    const albums = await albumService.getAllAlbums();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter álbuns' });
  }
};

export const getAlbumById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const album = await albumService.getAlbumById(id);
    if (album) {
      res.json(album);
    } else {
      res.status(404).json({ message: 'Álbum não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter álbum' });
  }
};

export const createAlbum = async (req: Request, res: Response) => {
  const album: Album = req.body;
  try {
    const newAlbumId = await albumService.createAlbum(album);
    res.status(201).json({ id: newAlbumId });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar álbum' });
  }
};

export const updateAlbum = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const album: Album = req.body;
  try {
    await albumService.updateAlbum(id, album);
    res.status(200).json({ message: 'Álbum atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar álbum' });
  }
};

export const deleteAlbum = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await albumService.deleteAlbum(id);
    res.status(200).json({ message: 'Álbum excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir álbum' });
  }
};
