// ** React utils
import React from "react";

// ** Next utils
import Image from "next/image";

import {
    Container, 
    Content,
    Logos, 
    Title,
    Description,
    Box,
    IconLogo
} from "./styles"

export default function Services ({
    info,
    lng
}) {

    return (
        <Container id="services">
            <Content>
                <Title id="Services">
                    {info.services.title[lng]}
                </Title>
                <Description>
                    
                </Description>
            </Content>
            <Logos>
                {
                    info.services.data.map(({title, description, illustration}, index) => (
                        <Box key={index}>
                            <IconLogo>
                                <Image 
                                    src={illustration}
                                    layout={"fill"}
                                />
                            </IconLogo>
                            <h4>{title[lng]}</h4>
                            <p>{description[lng]}</p>
                        </Box>
                    ))
                }
            </Logos>
        </Container>
    )
}