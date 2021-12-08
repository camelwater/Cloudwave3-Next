import React from 'react';
import * as Icons from 'react-feather';
import * as Theme from './Footer.style'

const FooterComponent = () => {

    const FooterLinks = [
        {
            name: 'Terms of Service',
            link: 'https://cloudwave3.com/terms-of-service'
        },
        {
            name: 'Privacy Policy',
            link: 'https://cloudwave3.com/privacy-policy'
        },
        {
            name: 'Contact',
            link: 'https://cloudwave3.com/contact-us'
        }
    ]
    return (
        <Theme.Footer>
            <Theme.FooterContainer>
                <Theme.FooterText>
                    camelwater - Next.js
                </Theme.FooterText>
            </Theme.FooterContainer>

            <Theme.FooterContainer>
                {FooterLinks.map((item, index) => (
                    <Theme.LinkText key={index} href={item.link} target='_blank'>
                        {item.name}
                    </Theme.LinkText>
                ))}
            </Theme.FooterContainer>
        </Theme.Footer>
    );
}

export default FooterComponent