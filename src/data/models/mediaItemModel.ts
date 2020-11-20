import mongoose, { Schema, Document } from 'mongoose';
import { ObjectID } from 'mongodb';
import { Gallery } from './galleryModel';
import { FileType } from '../../enums/fileType';

export interface MediaItem extends Document {
    galleryId: Gallery['id'];
    uploadDate: Date;
    fileType: FileType;
    caption?: string;
}

const MediaItemSchema: Schema = new Schema({
    galleryId: { type: ObjectID, required: true },
    uploadDate: { type: Date, required: true, default: Date()},
    fileType: { type: FileType, required: true },
    caption: { type: String, required: false }
}, { collection: 'mediaItems' });

export default mongoose.model<MediaItem>('MediaItem', MediaItemSchema);