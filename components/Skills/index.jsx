import Image from "next/image";
import React from "react";

import {
    Container, 
    Content,
    Logos, 
    Title,
    Description,
    Box
} from "./styles"

export default function Skills ({
    data,
    text,
    title
}) {

    return (
        <Container>
            <Content>
                <Title id="skills">{title}</Title>
                <Description>
                    {text}
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