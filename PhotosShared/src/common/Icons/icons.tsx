import React from 'react';
import _CameraAmicoSvg from '../../../assets/icons/camera-amico.svg';
import _CameraSvg from '../../../assets/icons/camera.svg';
import _GallerySvg from '../../../assets/icons/gallery.svg';
import _ImageFolderSvg from '../../../assets/icons/image-folder-amico.svg';
import _PhotoSharingSvg from '../../../assets/icons/photo-sharing-rafiki.svg';
import _PostPhotoSvg from '../../../assets/icons/wall-post-cuate.svg';

interface IProps {
    height?: number;
    width?: number;
    style?: any;
    fill?: string;
}

const CameraAmicoSvg = ({ height, width, style }: IProps) => (
    <_CameraAmicoSvg
        height={width || 200}
        width={height || 200}
        style={[style]}
    />
);
const PostPhotoSvg = ({ height, width, style }: IProps) => (
    <_PostPhotoSvg
        height={width || 200}
        width={height || 200}
        style={[style]}
    />
);
const PhotoSharingSvg = ({ height, width, style }: IProps) => (
    <_PhotoSharingSvg
        height={width || 200}
        width={height || 200}
        style={[style]}
    />
);
const ImageFolderSvg = ({ height, width, style }: IProps) => (
    <_ImageFolderSvg
        height={width || 200}
        width={height || 200}
        style={[style]}
    />
);
const CameraSvg = ({ height, width, fill, style }: IProps) => (
    <_CameraSvg
        height={width || 37}
        width={height || 37}
        style={[style]}
        fill={fill || '#333'}
    />
);
const GallerySvg = ({ height, width, fill, style }: IProps) => (
    <_GallerySvg
        height={width || 37}
        width={height || 37}
        style={[style]}
        fill={fill || '#333'}
    />
);

export {
    CameraAmicoSvg,
    PostPhotoSvg,
    PhotoSharingSvg,
    ImageFolderSvg,
    CameraSvg,
    GallerySvg,
};
