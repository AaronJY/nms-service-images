import MediaItemModel, { MediaItem } from "../models/mediaItemModel";

export class MediaItemRepo {
    static async insert(document: MediaItem): Promise<MediaItem> {
        return MediaItemModel.create(document);
    }
}