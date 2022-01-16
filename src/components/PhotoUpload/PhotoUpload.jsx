import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {useDispatch} from "react-redux";
import {updateProfilePhoto} from "../../reducers/profileReducer";

const PhotoUpload = () => {
    const dispatch = useDispatch();
    const onDrop = useCallback(acceptedFiles => {
        dispatch(updateProfilePhoto(acceptedFiles[0]));
    }, []);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        noDrag: true,
        multiple: false,
        accept: 'image/jpeg, image/png',
        getFilesFromEvent: event => fileGetter(event)
    });

    async function fileGetter(event) {
        const files = [];
        const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        for (let i = 0; i < fileList.length; i++) {
            files.push(fileList.item(i));
        }
        return files;
    }

    return (
        <section className="photo-upload">
            <div {...getRootProps({className: 'photo-upload__dropzone dropzone'})}>
                <input {...getInputProps()} />
                <p className="photo-upload__text">Change your Photo</p>
            </div>
        </section>
    );
};

export default PhotoUpload;
