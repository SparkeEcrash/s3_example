import types from './types';
import axios from 'axios';

export const getImages = () => async dispatch => {
    const { data: { images } } = await axios.get('/api/get-images');

    dispatch({
        type: types.GET_IMAGES,
        images
    });
}

export const resetImageUpload = () => ({ type: types.IMAGE_UPLOAD_RESET });

export const uploadImage = (details, image) => async dispatch => {
    try {
        dispatch({ type: types.IMAGE_UPLOAD_START });

        const s3UploadConfig = await axios.get(`/api/prep-upload?fileType=${image.type}&name=${image.name}`);

        const { url, key } = s3UploadConfig.data;

        await axios.put(url, image, {
            headers: {
                'Content-Type': image.type
            }
        });

        await axios.post('/api/save-image', {
            ...details,
            path: key
        });

        dispatch({ type: types.IMAGE_UPLOAD_COMPLETE });
    } catch(err){
        console.log('Error Uploading Image to S3', err);
    }
}
