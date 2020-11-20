import { MediaItem } from "../../data/models/mediaItemModel";
import { FileType } from "../../enums/fileType";

export class NewMediaItemApiModel {
    galleryId: MediaItem['galleryId'];
    caption?: MediaItem['caption'];
    fileType: MediaItem['fileType'];

    constructor(obj: any) {
        this.galleryId = obj.galleryId;
        this.caption = obj.caption;
        this.fileType = FileType[obj.fileType];
    }
}