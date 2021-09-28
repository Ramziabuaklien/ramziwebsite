import React, { useState } from 'react'
import Video from "../../videos/video.mp4";
import {Button} from "../ButtonElements";
import {HeroContainer,
HeroBg,
VideoBg,
HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight
} from "./HeroElements";

const HeroSection = () => {
    const [hover , setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello and Welcome to RamziWebsite</HeroH1>
                <HeroP>This actually my second <span style={{color: "#01bf71"}}>React</span> Website</HeroP>
                <HeroBtnWrapper>
                <Button as="a" href="https://ramziabuaklien.github.io/about-me/" style={{textDecoration:"none"}}onMouseEnter={onHover} onMouseLeave={onHover}>First React Web {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
