import React from 'react'
import { Link } from 'react-router-dom';

// -------- DATA ----------
import SidebarData from '../../data/SidebarData';

// -------- STYLES ----------
import './MenuBar.styles.scss';

const MenuBar = () => {

    const menubarList = SidebarData.map((data, index) => {
        return (

            <li key={index} className={data.clName}>
                <Link to={data.path} className="icon-link">
                    {data.icon}
                    <span>{data.title}</span>
                </Link>
            </li>

        )
    })

    return (
        <>
            <ul>
                {menubarList}
            </ul>


        </>
    )
}

export default MenuBar;