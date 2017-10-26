import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { css } from 'styled-components'

import { large } from '../util/breakpoints'

const RevealButton = styled.button`
  display: none;
  
  @media screen and (min-width: ${large.width}px) and (min-height: ${large.height}px) {
    position: absolute;
    display: inline-block;
    right:  -32px; /* button height / 2 */
    top:    94px;  /* [ 250 (card height) - 64 (button height) ] / 2 */
    width:  64px;
    height: 64px;

    user-select: none;
    outline: 0;
    border: 0;
    border-radius: 50%;
    z-index: 3;

    transition: all 0.1s ease-out;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #EB5B61;
    cursor: pointer;

    color: #fff;
    font-size: 35px;
    text-align: center;
    line-height: 50px;
    overflow: hidden;
    vertical-align: middle;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.5);
    }
  
    &:active {
      background-color: #ED6E72;
      transform: scale(1.0);
      box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.5);
    }
  }
`

const RevealChevron = styled.div`
  transition: 0.4s all 0.1s ease-out;
  text-align: center;
  padding-bottom: 5px;
  padding-right: ${props => props.pageRevealed ? '4px' : '0'};
  transform: ${props => props.pageRevealed ? 'rotateY(180deg)' : 'none'};
`

const CardContents = styled.div`
  padding: 65px 20px;
  text-align: center;
  color: #111111;

  @media screen and (min-width: ${large.width}px) and (min-height: ${large.height}px) {    
    padding: 65px 32px 20px 20px;  /* 32px to accommodate button */
    text-align: left;
  }
`

const TitleName = styled.h1`
  margin: 0;
  font-size: 2em;
  font-family: "Space Mono", Tahoma, Helvetica, sans-serif;
`

const Link = styled.a`
  color: #e8494e;
  border-bottom: 2px dotted #e8494e;
  text-decoration: none;
`

const CardIcon = styled.span`
  display: inline-block;
  min-width: 25px;
  text-align: center;
  user-select: none;
`

const ContactDetails = styled.address`
  margin: 10px 0 0 0;
  line-height: 1.5;
  font-style: normal;
`

const Code = styled.code`
  font-family: "Space Mono", "Consolas", monospace;
`

const sharedCardStyles = css`
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.23, 1.0, 0.32, 1.0);
  transform: rotate(${props => props.pageRevealed ? '-5deg' : '0deg'});
`

const finalCardStyles = css`
  top: 20%;
  left: 5%;
  width: 400px;
  height: 250px;
  border-radius: 5px;
`

const CardWrapper = styled.header`
  background-color: #E1E3DC;
  @media screen and (min-width: ${large.width}px) and (min-height: ${large.height}px) {  
    position: fixed;
    z-index: 2;
    transition-property: transform;
    background-color: ${props => props.pageRevealed ? 'transparent' : '#E1E3DC'};

    ${sharedCardStyles}
    ${finalCardStyles}
  }
`

const CardCollapser = styled.div`
  display: none;

  @media screen and (min-width: ${large.width}px) and (min-height: ${large.height}px) {    
    position: fixed;
    display: block;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #E1E3DC;
    box-shadow: 0 10px 6px -6px #000000;
    transition-property: top, left, width, height, box-shadow, border-radius, transform;

    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.23, 1.0, 0.32, 1.0);

    ${sharedCardStyles}
    ${props => props.pageRevealed ? finalCardStyles : ''}
  }
`

const Card = ({ pageRevealed, toggleReveal }) => (
  <div>
    <CardWrapper pageRevealed={pageRevealed}>
      <CardContents>
        <TitleName>Avinash Dwarapu</TitleName>
        <ContactDetails>
          <div>
            <CardIcon title='studying' aria-label='studying'>&#x1f393;</CardIcon>
            <Link href='https://cs.york.ac.uk'>Computer Science</Link> at <Link href='https://york.ac.uk'>University of York</Link>
          </div>
          <div>
            <CardIcon title='email address' aria-label='email address'>@</CardIcon>
            <Link href='mailto:avinash@dwarapu.me'>avinash&#64;dwarapu&#46;me</Link>
          </div>
          <div>
            <CardIcon title='pgp key' aria-label='pgp key'>&#x1f511;</CardIcon>
            <Link href='https://keybase.io/avinashd/key.asc'><Code>EEB3 026E A478 7776</Code></Link>
          </div>
        </ContactDetails>
      </CardContents>

      <RevealButton className='___reveal_button' role='presentation' onClick={toggleReveal}>
        <RevealChevron pageRevealed={pageRevealed}>&laquo;</RevealChevron>
      </RevealButton>
    </CardWrapper>

    <CardCollapser className='___card_collapser' pageRevealed={pageRevealed} />
    <Helmet>
      <noscript>{`
        <style>
          .___card_collapser, .___reveal_button {
            display: none;
          }
        </style>
      `}</noscript>
    </Helmet>
  </div>
)

Card.propTypes = {
  pageRevealed: PropTypes.bool,
  toggleReveal: PropTypes.func
}

export default Card
