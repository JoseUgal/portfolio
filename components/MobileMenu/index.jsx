import React from 'react'

// ** Hooks
import useTheme from '../../hooks/useTheme'

// ** Styles
import {
    Container,
    Option,
    ChooseLanguage,
    Title,
    Column
} from "./styles"

const MobileMenu = ({
    info,
    lng,
    setDefaultLanguage
}) => {

    const {theme, changeTheme} = useTheme()

    const toggleMenu = () => {
        const el = document.getElementById('Navbar_menu')
        el.classList.toggle('hidden')
    }

    return (
        <Container id="Navbar_menu" className='hidden'>
            <div>
                <Title>{info.title[lng]}</Title>
            </div>
            <Column>
                <Option onClick={toggleMenu} href="#about">{info.about.title[lng]}</Option>
                <Option onClick={toggleMenu} href="#projects">{info.projects.title[lng]}</Option>
                <Option onClick={toggleMenu} href="#services">{info.services.title[lng]}</Option>
                <Option onClick={toggleMenu} href="#skills">{info.skills.title[lng]}</Option>
                <br />
                <Option onClick={toggleMenu}>X</Option>
            </Column>
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
        </Container>
    )
}

export default MobileMenu
