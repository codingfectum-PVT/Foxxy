import emotionStyled from '@emotion/styled'
import React from 'react';
import bg from '../../../../assets/road-map-bg.jpg'
import { Box, Typography } from '@mui/material';
import ControlledAccordions from '../../Accordians';
import { Raining } from '../../Snowfall';
const Wrapper = emotionStyled.div`
    min-height: 100vh;
    background-color: #000000;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
        z-index: 1;
`

const RightContent = emotionStyled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
`
const CardWrapepr = emotionStyled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;

    @media(max-width: 899px){
        flex-direction: column;
        display:none;
    }
`
const CardWrapeprMob = emotionStyled(CardWrapepr)`
    display: none;
    @media(max-width: 899px){
        display: block;
    }
`
const Cards = emotionStyled(Box)`
    padding: 1vw;
    flex-basis: 25%;

    >div{
        background: #001b3975;
        backdrop-filter: blur(10px);
        border-radius: 12px;
        padding: 6vh 2.2vw 4vh;
        max-width: 470px;

        p{
            padding: 0px;
            text-align: left;
            @media(max-width: 899px){
                padding-top: 0px;
                margin: unset !important;
            }
        }
            
        @media(max-width: 899px){
            padding: 20px 2.2vw 20px;
        }
    }
`

const RoadmapCard = ({title, discription}) => {
    return(
        <Cards textAlign={'center'}>
            <Box>
                <Typography variant='h4' textAlign={'center'} marginLeft={3} fontFamily={'headingFont'}>{title}</Typography>
                <Box sx={{minHeight: {md: '26.2vw', xs: 0}}}>
                    {discription.map((item, index) => (
                        <Typography key={index} variant='body2' textAlign='center'>- {item}</Typography>
                    ))}
                </Box>
            </Box>
        </Cards>
    );
}
const RoadMap = () => {
  return (
    <Wrapper>
        <Raining />
        <RightContent>
            <Typography variant='h3' textAlign={'center'} marginLeft={3} fontFamily={'headingFont'}>Roadmap</Typography>
            <CardWrapepr>
                <RoadmapCard
                    title = "Phase 1"
                    discription = {[ "Website V1 development", "Social media platforms launch", "Community building (contests/giveaways)", "Contract deployment", "Website V1 launch"]}
                />
                <RoadmapCard
                    title = "Phase 2"
                    discription = {["Uniswap V2 launch", "DEXTools update", "Coinmarketcap & Coingecko listing", "ETH & DEXTools trending", "Memetic power trending", "DexScreener marketing", "Ambassador Program", "Billboard marketing push", "2500+ holders"]}
                />
                <RoadmapCard
                    title = "Phase 3"
                    discription = {["Customized game development", "TikTok campaign launch", "Press releases & contract audit", "First CEX listing", "Guerilla marketing", "Mascot introduction", "5000+ holders"]}
                />
                <RoadmapCard
                    title = "Phase 4"
                    discription = {[ "Foxxy’s game on Google Play and iOS", "NFT marketplace development & launch", "Buyback campaign", "More CEX listings", "Social media pranks with Foxxy's mascot", "10,000+ holders"]}
                />
            </CardWrapepr>
            <CardWrapeprMob>
                <ControlledAccordions
                    data = {[
                        [ "Website V1 development", "Social media platforms launch", "Community building (contests/giveaways)", "Contract deployment", "Website V1 launch"],
                        ["Uniswap V2 launch", "DEXTools update", "Coinmarketcap & Coingecko listing", "ETH & DEXTools trending", "Memetic power trending", "DexScreener marketing", "Ambassador Program", "Billboard marketing push", "2500+ holders"],
                        ["Customized game development", "TikTok campaign launch", "Press releases & contract audit", "First CEX listing", "Guerilla marketing", "Mascot introduction", "5000+ holders"],
                        [ "Foxxy’s game on Google Play and iOS", "NFT marketplace development & launch", "Buyback campaign", "More CEX listings", "Social media pranks with Foxxy's mascot", "10,000+ holders"]
                    ]}
                 />
            </CardWrapeprMob>
        </RightContent>
    </Wrapper>
  )
}

export default RoadMap