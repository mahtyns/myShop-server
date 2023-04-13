import styled from 'styled-components'
import { React, useState, useEffect }  from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { banners } from '../data';
import { SliderContainer, SliderNavArrows, ImgWrapper, SlideTextContainer, SlideImg, InfoContainer, BannerInfoTitle, BannerInfoButton } from '../styling/sliderStyling';

const Slider = () => {
    
    const [slideBannerNumber, setslideBannerNumber] = useState(0)
    const lastIndex = banners.length -1;
    const firstIndex = 0;

    const handleClickBack = () => {
     if (slideBannerNumber === 0 ) {
         setslideBannerNumber(lastIndex)
     } else 
     setslideBannerNumber(slideBannerNumber - 1); 
    }

    const handleClicForth = () => {
     if ( slideBannerNumber === banners.length - 1) {
         setslideBannerNumber(firstIndex);
     } else
     setslideBannerNumber(slideBannerNumber + 1); 
    }

    // useEffect(() => {
    // let slider = setInterval(()=>{
        
    //     if (slideBannerNumber === 0) {
    //         setslideBannerNumber(lastIndex);
    //     }
    //     else if (slideBannerNumber === banners.length - 1) {
    //         setslideBannerNumber(firstIndex);
    //     } else {
    //     setslideBannerNumber(slideBannerNumber+1)};
    // }, 5000);
    //     })



    return (
        <SliderContainer>
            <SliderNavArrows 
                direction="left" 
                onClick={handleClickBack}>
                    {/* Arrow Back Icon */}
                    <ArrowBackIos/>
            </SliderNavArrows>

            <ImgWrapper>
                <SlideImg src={banners[slideBannerNumber].img}/>     
                    <SlideTextContainer>                   
                        <InfoContainer>
                            <BannerInfoTitle>{banners[slideBannerNumber].title}</BannerInfoTitle>
                            <BannerInfoButton>EXPLORE</BannerInfoButton>
                        </InfoContainer>
                    </SlideTextContainer>
            </ImgWrapper>

            <SliderNavArrows 
                direction="right" 
                onClick={handleClicForth}>
                    {/* Arrow Forward Icon  */}
                    <ArrowForwardIos/>
            </SliderNavArrows>
          
        </SliderContainer>
    )
}



export default Slider
