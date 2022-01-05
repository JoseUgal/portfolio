import React, { useState } from "react";

// ** Hooks
import useTheme from "../../hooks/useTheme"
import useWindowSize from "../../hooks/useWindowSize"

import {
    Container,
    Title,
    Option,
    ChooseLanguage,
    MenuIcon
} from "./styles"

export default function Navbar ({
    info,
    lng,
    setDefaultLanguage
}) {
    const {theme, changeTheme} = useTheme()
    const { width } = useWindowSize()
    const isSmallScreen = () => ( width < 680 )

    const toggleMenu = () => {
        const el = document.getElementById('Navbar_menu')
        el.classList.toggle('hidden')
    }

    return (
        <>
            <Container id="navbar">
                <div>
                    <Title>{info.title[lng]}</Title>
                </div>
                { isSmallScreen() 
                    ? (
                        <MenuIcon onClick={toggleMenu} />
                    ) : (
                        <>
                            <div>
                                <Option href="#about">{info.about.title[lng]}</Option>
                                <Option href="#skills">{info.skills.title[lng]}</Option>
                                <Option href="#services">{info.services.title[lng]}</Option>
                                <Option href="#projects">{info.projects.title[lng]}</Option>
                            </div>
                            <div>
                                <Option onClick={changeTheme}>
                                    { theme === 'light'
                                        ? '🌞'
                                        : '🌙'
                                    } 
                                </Option>
                                <ChooseLanguage name="languages" onChange={(e) => {
                                    setDefaultLanguage(e.target.value)
                                }}>
                                    <option value="es">ES</option>
                                    <option value="en">EN</option>
                                </ChooseLanguage>
                            </div>
                        </>
                    )

                }
            </Container>
        </>
    )
}