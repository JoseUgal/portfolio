import React from "react";

// ** Next utils
import Image from "next/image"

// ** Styles
import {
    ContactButton,
    Container,
    Image as ImageContainer
} from "./styles"

// ** Icons
import {
    Whatsapp
} from "@styled-icons/boxicons-logos"

// ** Hooks
import useWindowSize from "../../hooks/useWindowSize";

export default function Presentation ({
    info,
    lng
}) {
    const { width } = useWindowSize()

    return (
        <Container>
            <div>
                <span>{info.sentences.welcome[lng]}</span>
                <h3>{info.name}</h3>
                <h4>{info.specialization[lng]}</h4>
                <ContactButton href="https://wa.me/message/QTS2WGJVKQCFM1" >
                    <Whatsapp />
                    Whatsapp
                </ContactButton>
            </div>
            <div>
                <Image
                    alt="Presentation-Image"
                    src={"/illustration.svg"}
                    width={(width < 1024) ? 600 : 800}
                    height={(width < 1024) ? 600 : 800}
                />
            </div>
        </Container>
    )
}