import React from "react";

// ** Hooks
import useTheme from "../../hooks/useTheme"

import {
    Container,
    Title,
    Option
} from "./styles"

export default function Navbar () {

    const {changeTheme} = useTheme()

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
                    ☀️ 
                </Option>
            </div>
        </Container>
    )
}