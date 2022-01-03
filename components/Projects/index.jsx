import Image from "next/image";
import React from "react";
import ProjectBox from "../ProjectBox";

import {
    Container, 
    Title,
    Content
} from "./styles"

export default function Projects ({
    data
}) {

    console.log(data)

    return (
        <Container id="projects">
            <Title>Projects</Title>
            <Content>
                {
                    data.map(({name, description, links}, index) => (
                        <ProjectBox 
                            key={index}
                            name={name} 
                            description={description} 
                            links={links} 
                        />
                    ))
                }
            </Content>
        </Container>
    )
}