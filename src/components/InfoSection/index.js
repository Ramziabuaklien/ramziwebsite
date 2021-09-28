import React from 'react';
import{InfoContainer, InfoWrapper,
InfoRow,Column1,Column2,TextWrapper,TopLine,
Heading,SubTitle,BtnWrap,ImgWrap,Img
} from "./InfoElements";


const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,
darkText,description,buttonLabel,img, alt,primary,dark,dark2,to}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                            
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default InfoSection
