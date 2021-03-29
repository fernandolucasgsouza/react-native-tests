import React from 'react';
import _CameraAmicoSvg from '../../../assets/icons/camera-amico.svg';
import _ImageFolderSvg from '../../../assets/icons/image-folder-amico.svg';
import _PhotoSharingSvg from '../../../assets/icons/photo-sharing-rafiki.svg';
import _PostPhotoSvg from '../../../assets/icons/wall-post-cuate.svg';

interface IProps {
    height?: number;
    width?: number;
    style?: any;
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

export { CameraAmicoSvg, PostPhotoSvg, PhotoSharingSvg, ImageFolderSvg };
