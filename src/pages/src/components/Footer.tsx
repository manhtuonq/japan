import React from 'react';
import facebookLogo from '@assets/img/facebook black.1.svg';
import twitterLogo from '@assets/img/twitter black.1.svg';
import linkedinLogo from '@assets/img/linkedin black.1.svg';
import youtubeLogo from '@assets/img/youtube color.1.svg';
import instagramLogo from '@assets/img/instagram black.1.svg';
import googleLogo from '@assets/img/googleplus black.1.svg';
import pinterestLogo from '@assets/img/pinterest color.1.svg';
import rssLogo from '@assets/img/rss black.1.svg';
import roundLocalPrintshopIcon from '@assets/img/round-local-printshop-24px.svg';
import roundPhoneIcon from '@assets/img/round-phone-24px.svg';
import roundPlaceIcon from '@assets/img/round-place-24px.svg';

const footerLinks = ['About Us', 'Contact Us', 'Help', 'Privacy Policy', 'Disclaimer'];
const socialIcons = [
    { src: facebookLogo, alt: 'Facebook Logo' },
    { src: twitterLogo, alt: 'Twitter Logo' },
    { src: linkedinLogo, alt: 'LinkedIn Logo' },
    { src: youtubeLogo, alt: 'YouTube Logo' },
    { src: instagramLogo, alt: 'Instagram Logo' },
    { src: googleLogo, alt: 'Google+ Logo' },
    { src: pinterestLogo, alt: 'Pinterest Logo' },
    { src: rssLogo, alt: 'RSS Logo' }
];

const Footer: React.FC = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex-grow'>
                <footer className='bg-[#ff1100] text-white py-20'>
                    <div className='max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-start'>
                        <div className='w-full h-px bg-white opacity-30 mb-20'></div>
                        <EZLunchLogo />
                        <ContactAndSocial />
                        <FooterLinksAndCopyright />
                    </div>
                </footer>
            </div>
        </div>
    );
};

const EZLunchLogo: React.FC = () => (
    <div className='flex flex-col items-start'>
        <div className='border-8 border-white px-4 py-2 mb-4 ml-12'>
            <h1 className='text-4xl font-bold'>EZLunch</h1>
        </div>
    </div>
);

const ContactAndSocial: React.FC = () => (
    <div className='flex flex-col items-start space-y-6'>
        <ContactInfo />
        <SocialMediaIcons />
    </div>
);

const ContactInfo: React.FC = () => (
    <>
        <div className='flex items-center gap-2'>
            <img src={roundPlaceIcon} alt='Location Icon' className='w-6 h-6' />
            <span className='text-sm'>No. 1 Dai Co Viet, Bach Khoa, Hai Ba Trung, Hanoi</span>
        </div>
        <div className='flex flex-wrap gap-4'>
            <div className='flex items-center gap-2'>
                <img src={roundPhoneIcon} alt='Phone Icon' className='w-6 h-6' />
                <span className='text-sm'>(123) 456-7890</span>
            </div>
            <div className='flex items-center gap-2'>
                <img src={roundLocalPrintshopIcon} alt='Printshop Icon' className='w-6 h-6' />
                <span className='text-sm'>(123) 456-7890</span>
            </div>
        </div>
    </>
);

const SocialMediaIcons: React.FC = () => (
    <div className='flex flex-wrap gap-4'>
        <div>Social Media</div>
        <div className='flex flex-wrap gap-4'>
            {socialIcons.map((icon, idx) => (
                <img key={idx} src={icon.src} alt={icon.alt} className='w-6 h-6' />
            ))}
        </div>
    </div>
);

const FooterLinksAndCopyright: React.FC = () => (
    <div className='flex flex-col items-start w-full mt-8'>
        <div className='w-full h-px bg-white opacity-30 mb-6'></div>
        <div className='flex flex-wrap justify-between w-full'>
            <FooterLinks />
            <div className='text-sm opacity-70'>Copyright © 2018 • Lift Media Inc.</div>
        </div>
    </div>
);

const FooterLinks: React.FC = () => (
    <div className='flex flex-wrap gap-4'>
        {footerLinks.map((link, idx) => (
            <a key={idx} href='#' className='text-sm font-medium uppercase hover:underline'>
                {link}
            </a>
        ))}
    </div>
);

export default Footer;
