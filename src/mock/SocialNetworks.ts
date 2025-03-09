import { IconType } from "react-icons";
import { ISocialNetwork } from "../interface/ISocialNetworks";
import { FaFacebookF, FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';

export const socialNetworks: ISocialNetwork[] = [
    {
        name: 'facebook',
        icon: FaFacebookF as IconType,
        url: 'https://www.facebook.com/Chicksgroup/'
    }, 
    {
        name: 'instagram',
        icon: FaInstagram as IconType,
        url: 'https://www.instagram.com/chicksgold/'
    },
    {
        name: 'twitter',
        icon: FaTwitter as IconType,
        url: 'https://twitter.com/chicksgold'
    },
    {
        name: 'discord',
        icon: FaDiscord as IconType,
        url: 'https://discord.com/invite/chicksgold'
    }
]