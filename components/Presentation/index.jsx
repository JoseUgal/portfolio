import React from "react";

// ** Styles
import {
    ContactButton,
    Container,
    Image
} from "./styles"

// ** Icons
import {
    Whatsapp
} from "@styled-icons/boxicons-logos"

export default function Presentation ({
    name,
    job
}) {
    return (
        <Container>
            <div>
                <span>Hello, I'm</span>
                <h3>{name}</h3>
                <h4>{job}.</h4>
                <ContactButton href="https://wa.me/message/QTS2WGJVKQCFM1" >
                    <Whatsapp />
                    Whatsapp
                </ContactButton>
            </div>
            <Image>
                <img
                    src={"/illustration.svg"}
                    height={"100%"}
                />
            </Image>
        </Container>
    )
}