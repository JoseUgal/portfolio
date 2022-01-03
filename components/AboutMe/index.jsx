import React from "react";

// ** Next utils
import Image from "next/image"

import {
    Container,
    Title,
    Description,
    ContactButton
} from "./styles"

export default function AboutMe ({
    description
}) {
    return (
        <Container id="about">
            <div>
                <Image
                    src={"/illustration2.svg"}
                    layout={"fill"}
                />
            </div>
            <div>
                <Title>About me</Title>
                <Description>
                    {description}
                </Description>
                <ContactButton>Download CSV</ContactButton>
            </div>
        </Container>
    )
}