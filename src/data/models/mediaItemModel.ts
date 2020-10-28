import mongoose, { Schema, Document } from 'mongoose';
import { ObjectID } from 'mongodb';
import { GalleryVisibility } from 'nms-package-common';
import { Gallery } from './galleryModel';
import { FileType } from '../../enums/fileType';

export interface MediaItem extends Document {
    galleryId: Gallery['id'];
    uploadDate: Date;
    fileType: FileType;
    caption?: string;
}

const GallerySchema: Schema = new Schema({
    name: { type: String, required: true },
    createDate: { type: Date, required: true, default: Date() },
    profileId: { type: ObjectID, required: true },
    visibility: { type: GalleryVisibility, required: true, default: GalleryVisibility.Private }
}, { collection: 'galleries' });

export default mongoose.model<Gallery>('Gallery', GallerySchema);