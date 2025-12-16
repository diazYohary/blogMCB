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
            {subtitle:'Salud', url:'https://mcbrokers.com.mx/productos/salud'},
            {subtitle:'Vida', url:'https://mcbrokers.com.mx/productos/vida'},
            {subtitle:'Auto', url:'https://mcbrokers.com.mx/productos/auto'},
            {subtitle:'Hogar', url:'https://mcbrokers.com.mx/productos/hogar'},
            {subtitle:'Mascotas', url:'https://mcbrokers.com.mx/productos/mascotas'},
            {subtitle:'Colegios', url:'https://mcbrokers.com.mx/productos/colegios'},
            {subtitle:'Empresas', url:'https://mcbrokers.com.mx/productos/empresas'},
        ]
    },
    {
        title:'Nosotros',
        links:[
            {subtitle:'Quiénes somos', url:'https://mcbrokers.com.mx/nosotros'},
            {subtitle:'Talento', url:'https://mc-brokers.pandape.computrabajo.com/'},
            {subtitle:'Intranet', url:''},
        ]
    },
    {
        title:'Contacto',
        links:[
            {subtitle:'Tengo un imprevisto', url:'https://mcbrokers.com.mx/imprevisto'},
            {subtitle:'Servicio al cliente', url:'https://mcbrokers.com.mx/imprevisto'},
            {subtitle:'Quiero cotizar', url:'https://mcbrokers.com.mx/cotizar'},
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
    { store: 'AppStore', url:'https://apps.apple.com/mx/app/mcbrokers/id6754467413', src: appStore},
    { store: 'GooglePlay', url:'https://play.google.com/store/apps/details?id=mx.com.mcbrokers.app', src: googlePlay},
]