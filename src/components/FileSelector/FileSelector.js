// src/MediaUploader.js
import React, { useState } from 'react';

const MediaUploader = () => {
    const [media, setMedia] = useState(null);
    const [mediaType, setMediaType] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.type.split('/')[0];
            if (fileType === 'image' || fileType === 'video' || fileType === 'audio') {
                setMedia(URL.createObjectURL(file));
                setMediaType(fileType);
            } else {
                alert('Unsupported file type. Please select an image, video, or audio file.');
            }
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {media && (
                <div>
                    {mediaType === 'image' && <img src={media} alt="Selected media" style={{ maxWidth: '100%', height: 'auto' }} />}
                    {mediaType === 'video' && <video controls style={{ maxWidth: '100%', height: 'auto' }}><source src={media} type="video/mp4" /></video>}
                    {mediaType === 'audio' && <audio controls><source src={media} type="audio/mp3" /></audio>}
                </div>
            )}
        </div>
    );
};

export default MediaUploader;
