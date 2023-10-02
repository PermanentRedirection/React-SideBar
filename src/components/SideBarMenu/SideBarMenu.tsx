import React, { useState } from 'react'; // importing FunctionComponent
import './SideBar.css'

type MenuConfig = {
    title: string,
    subItems?: Array<string>,
}

const menuConfig: MenuConfig[] = [
    {
        title: "Home"
    },
    {
        title: "Services",
        subItems: ["Cooking", "Cleaning"]
    },
    {
        title: "Contact",
        subItems: ["Phone", "Mail"]
    }
];



export const SideBarMenu = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const handleSubMenuClick = (title: string) => {
        setOpenMenu((prev) => (prev === title ? null : title));
    }

    return (
        <div>
            <h1>Menu</h1>
            <ul className="menu">
                {menuConfig.map((menuItem, index) => (
                    <div key={index}>
                        <div
                            className="menu-item"
                        >
                            {menuItem.title}

                            {menuItem?.subItems &&
                                <button onClick={() => handleSubMenuClick(menuItem.title)}>
                                    {openMenu === menuItem.title ? 'Hide' : 'Expand'}
                                </button>
                            }
                        </div>
                        {openMenu === menuItem.title && menuItem.subItems && (
                            <div className="sub-menu">
                                {menuItem.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem}</li>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    )
} 