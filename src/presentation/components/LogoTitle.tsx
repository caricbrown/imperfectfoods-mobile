import React from 'react';
import { Image } from 'react-native';

export const LogoTitle = () => {

    return (
        <Image
            style={{ resizeMode: 'contain', width: 100, height: 50 }}
            source={{ uri: 'https://res.cloudinary.com/imperfect/image/upload/website-assets/Imperfect_Logo.png' }}
        />
    );
};

