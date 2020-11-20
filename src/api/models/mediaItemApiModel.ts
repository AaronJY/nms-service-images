import { MediaItem } from "../../data/models/mediaItemModel";

export class MediaItemApiModel {
    id: MediaItem['id'];
    uploadDate: MediaItem['uploadDate'];
    galleryId: MediaItem['galleryId'];
    caption?: MediaItem['caption'];
    fileType: MediaItem['fileType'];

    constructor(document: MediaItem) {
        this.id = document.id;
        this.uploadDate = document.uploadDate;
        this.galleryId = document.galleryId;
        this.caption = document.caption;
        this.fileType = document.fileType;
    }
}