import { TestIDs } from 'presentation/testIDs';
import React from 'react';
import { Image } from 'react-native';

export const ThreeAvocados = () => {

    return (
        <Image
            style={{ resizeMode: 'contain', width: 300, height: 150 }}
            source={{ uri: 'https://res.cloudinary.com/imperfect/image/upload/h_374,w_578,f_auto,fl_lossy,q_auto//v1567694151/website-assets/Googly_Avocados_Centered.jpg' }}
            testID={TestIDs.threeAvocados}
        />
    );
};

