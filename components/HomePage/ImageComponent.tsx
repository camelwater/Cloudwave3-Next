import React from 'react';
import Image from 'next/image';
import * as Theme from './Image.theme';

const ImageComponent: React.FC = () => {
    return (
        <Theme.Container>
            <Theme.ImgContainer>
                <Image
                    src={'/images/home_animation_test.gif'}
                    height={1500}
                    width={2000}
                />
            </Theme.ImgContainer>
        </Theme.Container>
    );
}

export default ImageComponent
        