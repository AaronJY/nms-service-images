import { ConflictError } from "nms-package-common";

export class GalleryExistsError extends ConflictError {
    constructor(message?: string) {
        super(message);
        this.name = "GalleryExists";
    }
}