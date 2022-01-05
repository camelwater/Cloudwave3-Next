import React from 'react';
import SingleService from './SingleService';
import * as Theme from './Services.theme';
import ScrollAnimation from 'react-animate-on-scroll';

const ServiceComponent: React.FC<{ contentData }> = ({ contentData }) => {

    return (
        <Theme.Container>
            <ScrollAnimation 
                animateIn='animate__bounceInRight'
                animateOnce={true}
            >
                <Theme.TitleText>Services</Theme.TitleText>
            </ScrollAnimation>
            <Theme.ServiceContainer>
                {contentData.map((serviceContent, index) => (
                    <SingleService 
                        mdContent={serviceContent.content} 
                        title={serviceContent.title} 
                        img={serviceContent.img} 
                        identifier={serviceContent.id} 
                        key={index}
                        idx={index}
                    />
                ))}
                
            </Theme.ServiceContainer>
        </Theme.Container>
    );
}

export default ServiceComponent
