import React from "react";

// ** Hooks
import useTheme from "../../hooks/useTheme"

import {
    Container,
    Title,
    Option
} from "./styles"

export default function Navbar () {

    const {theme, changeTheme} = useTheme()

    console.log(theme)

    return (
        <Container id="navbar">
            <div>
                <Title>Portfolio</Title>
            </div>
            <div>
                <Option href="#about">About Me</Option>
                <Option href="#projects">Projects</Option>
                <Option href="#services">Services</Option>
                <Option href="#skills">Skills</Option>

                <Option onClick={changeTheme}>
                    { theme === 'light'
                        ? '🌙'
                        : '☀️'
                    } 
                </Option>
            </div>
        </Container>
    )
}