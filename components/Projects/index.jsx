import Image from "next/image";
import React from "react";
import ProjectBox from "../ProjectBox";

import {
    Container, 
    Title,
    Content
} from "./styles"

export default function Projects ({
    data,
    title,
    lng
}) {

    return (
        <Container id="projects">
            <Title>{title}</Title>
            <Content>
                {
                    data.map(({name, description, links}, index) => (
                        <ProjectBox 
                            key={index}
                            name={name[lng]} 
                            description={description[lng]} 
                            links={links} 
                        />
                    ))
                }
            </Content>
        </Container>
    )
}