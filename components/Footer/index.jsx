import React, { useEffect, useState } from 'react'

// ** Styles
import {
    Container,
    IconLink,
    UpButton
} from "./styles"

// ** Icons
import {
    InstagramAlt as Instagram,
    Twitter,
    Linkedin
} from "@styled-icons/boxicons-logos"

import {
    ArrowheadUp as ArrowUp
} from "@styled-icons/evaicons-solid"

const Footer = () => {

    const [ isHidden, setIsHidden ] = useState(true)

    // useEffect(function() {

    //     function checkScrollTop(){

    //         const { scrollY } = window

    //         if ( scrollY > 70 && isHidden ){
    //             setIsHidden(false)
    //             return
    //         }

    //         if( scrollY < 70 && !isHidden ){
    //             setIsHidden(true)
    //             return
    //         }

    //     }

    //     checkScrollTop()

    //     window.addEventListener("scroll", checkScrollTop)

    //     return () => {
    //         window.removeEventListener("scroll", checkScrollTop)
    //     }

    // }, [])

    return (
        <>
            <Container>
                <IconLink>
                    <Instagram />
                </IconLink>
                <IconLink>
                    <Twitter />
                </IconLink>
                <IconLink>
                    <Linkedin />
                </IconLink>
                <UpButton href='#navbar'>
                    <ArrowUp />
                </UpButton>
            </Container>
        </>
        
    )
}

export default Footer
