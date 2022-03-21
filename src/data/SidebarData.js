import React from 'react'

import * as BsIcons from 'react-icons/bs'
import * as FiIcons from 'react-icons/fi'
// import * as FaIcons from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'




export const MenubarData = [
    {
        title: 'home',
        path: '/',
        icon: <BsIcons.BsHouseDoor />,
        clName: 'icon-text'
    },
    {
        title: 'Explore',
        path: '/',
        icon: <BsIcons.BsCompass />,
        clName: 'icon-text'
    },
    {
        title: 'Subscriptions',
        path: '/',
        icon: <BsIcons.BsCollectionPlay />,
        clName: 'icon-text'
    },
    {
        title: 'Library',
        path: '/',
        icon: <FiIcons.FiYoutube />,
        clName: 'icon-text'
    },
    {
        title: 'History',
        path: '/',
        icon: <BiIcons.BiHistory />,
        clName: 'icon-text'
    },
    {
        title: 'Your videos',
        path: '/',
        icon: <BsIcons.BsPlayBtn />,
        clName: 'icon-text'
    },
    {
        title: 'Watch later',
        path: '/',
        icon: <BsIcons.BsClock />,
        clName: 'icon-text'
    },
    {
        title: 'Liked videos',
        path: '/',
        icon: <BsIcons.BsHandThumbsUp />,
        clName: 'icon-text'
    },
    {
        title: 'Show more',
        path: '/',
        icon: <BsIcons.BsChevronDown />,
        clName: 'icon-text'
    }
]

export default MenubarData;