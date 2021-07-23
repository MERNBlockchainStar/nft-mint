
import MediumIcon from '../../components/Icons/MediumIcon'
import TelegramIcon from '../../components/Icons/TelegramIcon'
import TwitterIcon from '../../components/Icons/TwitterIcon'
import EmailIcon from '../../components/Icons/EmailIcon'
import OpenseaIcon from '../../components/Icons/OpenseaIcon'
import DiscordIcon from '../../components/Icons/DiscordIcon'

const FOOTER_MENUS = [
    {
        id: 'twitter',
        icon: <TwitterIcon />,
        url: 'https://twitter.com/k-9'
    },
    {
        id: 'discord',
        icon: <DiscordIcon />,
        url: 'https://t.me/k-9'
    },
    {
        id: 'medium',
        icon: <MediumIcon />,
        url: 'https://k-9.medium.com/',
    },
    {
        id: 'email',
        icon: <EmailIcon />,
        url: 'mailto:info@k-9',
    },
    {
        id: 'opensea',
        icon: <OpenseaIcon />,
        url: 'https://opensea.io/'
    }
];

export {
    FOOTER_MENUS
}