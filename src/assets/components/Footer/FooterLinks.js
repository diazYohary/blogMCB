import fbIcon from '../../img/SocialMedia/facebook.svg'
import igIcon from '../../img/SocialMedia/instagram.svg'
import twIcon from '../../img/SocialMedia/xlogo.svg'
import ttIcon from '../../img/SocialMedia/tiktok.svg'
import liIcon from '../../img/SocialMedia/linkedin.svg'

import appStore from '../../img/SocialMedia/appStore.png'
import googlePlay from '../../img/SocialMedia/googlePlay.png'

export const FooterLinks=[
    {
        title:'Productos',
        links:[
            {subtitle:'Salud', url:''},
            {subtitle:'Vida', url:''},
            {subtitle:'Auto', url:''},
            {subtitle:'Hogar', url:''},
            {subtitle:'Mascotas', url:''},
        ]
    },
    {
        title:'Nosotros',
        links:[
            {subtitle:'Quiénes somos', url:''},
            {subtitle:'Talento', url:''},
            {subtitle:'Intranet', url:''},
        ]
    },
    {
        title:'Contacto',
        links:[
            {subtitle:'Tengo un imprevisto', url:''},
            {subtitle:'Servicio al cliente', url:''},
            {subtitle:'Quiero cotizar', url:''},
        ]
    },
];

export const socialMedia={
    title:'Síguenos en',
    links:[
        {socialMedia:'Facebook', url:'https://www.facebook.com/MCBrokersMX', icon: fbIcon},
        {socialMedia:'TikTok', url:'https://www.tiktok.com/@mcbrokers', icon: ttIcon},
        {socialMedia:'Instagram', url:'https://www.instagram.com/mcbrokersmexico', icon: igIcon},
        {socialMedia:'Twitter', url:'https://x.com/mcbrokersmx', icon: twIcon},
        {socialMedia:'Linkedin', url:'https://mx.linkedin.com/company/mcbrokers', icon: liIcon},
    ]
}

export const mobileStores=[
    { store: 'AppStore', url:'', src: appStore},
    { store: 'GooglePlay', url:'', src: googlePlay},
]