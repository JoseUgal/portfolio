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
                <IconLink href={'https://www.instagram.com/joseul_17'} target={'_blank'}>
                    <Instagram />
                </IconLink>
                <IconLink href={'https://www.twitter.com/joseul_17'} target={'_blank'}>
                    <Twitter />
                </IconLink>
                <IconLink href={'https://www.lindekin.com/joseul_17'} target={'_blank'}>
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
