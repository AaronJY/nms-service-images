export enum FileType {
    UNKNOWN = 0,
    PNG,
    JPEG,
    GIF,
    WEBP,
    AVIF,
    ZIP,
    PDF
}

export function stringToFileType(str: string): FileType {
    switch (str.trim().toLocaleLowerCase()) {
        default:
            return FileType.UNKNOWN;
        case "png":
            return FileType.PNG;
        case "jpg":
        case "jpeg":
            return FileType.JPEG;
        case "gif":
            return FileType.GIF;
        case "webp":
            return FileType.WEBP;
        case "avif":
            return FileType.AVIF;
        case "zip":
            return FileType.ZIP;
        case "pdf":
            return FileType.PDF;
    }
}