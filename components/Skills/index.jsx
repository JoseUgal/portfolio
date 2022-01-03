import Image from "next/image";
import React from "react";

// ** Hooks
import useWindowSize from "../../hooks/useWindowSize"

import {
    Container, 
    Content,
    Logos, 
    Title,
    Description,
    Box
} from "./styles"

export default function Skills ({
    data
}) {

    const { width } = useWindowSize()

    return (
        <Container>
            <Content>
                <Title id="skills">Skills</Title>
                <Description>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis minima earum laborum exercitationem cumque vero ducimus pariatur quia! Nisi autem ratione quo blanditiis dignissimos asperiores cupiditate magni ex dolorum dicta?
                </Description>
            </Content>
            <Logos>
                {
                    data.map(({name, illustration}, index) => (
                        <Box key={index} className="tooltip">
                            <div>
                                <Image src={illustration} layout="fill" />
                                
                            </div>
                            <span className={"tooltiptext"}>
                                {name.toUpperCase()}
                            </span>
                        </Box>
                    ))
                }
            </Logos>
        </Container>
    )
}