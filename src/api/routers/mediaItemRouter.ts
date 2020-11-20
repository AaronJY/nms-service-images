import express, { Response, Request, Router, NextFunction, response } from 'express';
import { NewMediaItemApiModel } from '../models/newMediaItemApiModel';
import MediaItemModel, { MediaItem } from '../../data/models/mediaItemModel';
import { MediaItemRepo } from '../../data/repos/mediaItemRepo';
import { MediaItemApiModel } from '../models/mediaItemApiModel';

const router: Router = express.Router();

router.post('/', (req: Request, resp: Response, next: NextFunction) => {
    const newMediaItem: NewMediaItemApiModel = new NewMediaItemApiModel(req.body);

    const document = new MediaItemModel({
        galleryId: newMediaItem.galleryId,
        caption: newMediaItem.caption,
        fileType: newMediaItem.fileType
    } as MediaItem);

    MediaItemRepo.insert(document)
        .then(mediaItem => resp.send(new MediaItemApiModel(mediaItem)))
        .catch(err => next(err));
});

export default router;