import React from 'react'

// ** Icons
import {
    Github,
    InternetExplorer
} from "@styled-icons/boxicons-logos"

// ** Styles
import {
    Container,
    Title,
    Description,
    Links,
    LinkButton
} from "./styles"

const ProjectBox = ({
    name,
    description,
    links
}) => {

    console.log(links)
    return (
        <Container>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Links>
                { links.web && (
                    <LinkButton href={links.web} target={"_blank"}>
                        <InternetExplorer />
                        Demo
                    </LinkButton>
                )}
                { links.github && (
                    <LinkButton href={links.github} target={"_blank"}>
                        <Github />
                        Github
                    </LinkButton>
                )}
            </Links>
        </Container>
    )
}

export default ProjectBox
