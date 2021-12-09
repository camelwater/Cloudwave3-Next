import React from 'react';
import * as Theme from './About.theme';
import ScrollAnimation from 'react-animate-on-scroll';


const AboutComponent: React.FC = () => {

    return (
        <Theme.AboutContainer>
            <Theme.AboutTextContainer>
                <ScrollAnimation animateIn='animate__bounceInRight' animateOnce={true}>
                    <Theme.TitleText>About us</Theme.TitleText>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__zoomIn' animateOnce={true} delay={500}>
                    <Theme.AboutText>Health.OneNet is built on one idea - to give healthcare providers better tools, leveraging the latest AI/ML development and research, to enable them better serve their patients and ultimately improve their lives and fulfill their full potentials.</Theme.AboutText>
                    <Theme.AboutText>The only way we measure our success is how much time a doctor actually spends on talking, examining their patients but not making notes, updating electronic health record (EHR) or talking with the insurance companies.</Theme.AboutText>
                    <Theme.AboutText>Health.OneNet is not in business to sell some technologies or solutions to the healthcare professionals; we are here to free our doctors/nursers from any non-patient related activities so that they will give all their attention to what they truly care about.</Theme.AboutText>
                </ScrollAnimation>
            </Theme.AboutTextContainer>
        </Theme.AboutContainer>
    );
}

export default AboutComponent