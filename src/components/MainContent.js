import React from 'react'
import styled from 'styled-components'

import AnchorList from './AnchorList'
import { large } from '../util/breakpoints'

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 500px;
  text-align: center;

  @media screen and (min-width: ${large.width}px) and (min-height: ${large.height}px) {    
    margin-left: 5%;
    padding-top: 5%;
    padding-left: 470px; /* 420px (card width) + 30px (button width) + 20px (breathing room) */
    text-align: left;
    z-index: 0;
  }
`

const Blurb = styled.div`
  margin: 0 auto;
  font-family: "Space Mono", Tahoma, sans-serif;
  line-height: 1.9;
  text-align: left;
  max-width: 600px;

  @media screen and (min-width: ${large.width}px) and (min-height: ${large.height}px) {    
    margin: 0 0 40px 0;
    padding: 0;
    font-size: 1.2em;
    max-width: 500px;
  }
`

const Paragraph = styled.p`
  margin: 0 0 10px 0;
`

const Highlight = styled.em`
  font-style: normal;
  background-color: #9b2583;
  padding: 3px;
`

const Link = styled.a`
  text-decoration: none;
  border-bottom: 2px dotted #eeeeee;
  color: #eeeeee;
`

const ProjectLanguage = styled.span`
  color: #aaaaaa;
  font-weight: lighter;
`

const MainContent = () => (
  <Container>
    <Blurb>
      <Paragraph>
        Hello there! I&#8217;m a final-year <Highlight>Computer Science</Highlight> student at the University of York.
        You can find my projects on my <Highlight><Link href='https://github.com/avinashbot'>GitHub profile</Link></Highlight>.
      </Paragraph>

      <Paragraph>
        I&#8217;ve worked on all kinds of things in the past,{' '}
        from <Highlight>frontend</Highlight> design (using JQuery and React){' '}
        to <Highlight>backend</Highlight> development (using all kinds of languages) and{' '}
        <Highlight>serverless</Highlight> and service-oriented architecures (on AWS).{' '}
        My other interests include <Highlight>cryptography</Highlight> and <Highlight>UX design</Highlight>.
      </Paragraph>

      <Paragraph>
        Most days, you can reach me with <Link href='mailto:avinash@dwarapu.me'>good ol&#8217; email</Link>,
        but you can find me <Link href='https://keybase.io/avinashd'>in other places too</Link>.
      </Paragraph>
    </Blurb>

    <AnchorList title='profiles'>
      <Link href='https://keybase.io/avinashd'>keybase</Link>
      <Link href='https://github.com/avinashbot'>github</Link>
      <Link href='https://www.linkedin.com/in/avinashdwarapu'>linkedin</Link>
      <Link href='https://facebook.com/avinash.dwarapu'>facebook</Link>
      <Link href='https://twitter.com/avinashbot'>twitter</Link>
      <Link href='https://www.reddit.com/user/Mustermind'>reddit</Link>
    </AnchorList>

    <AnchorList title='projects'>
      <span>
        <Link href='https://github.com/avinashbot/satellite' target='_blank' rel='noopener noreferrer'>satellite</Link>
        <ProjectLanguage> (go)</ProjectLanguage>
      </span>
      <span>
        <Link href='https://github.com/avinashbot/redd' target='_blank' rel='noopener noreferrer'>redd</Link>
        <ProjectLanguage> (ruby)</ProjectLanguage>
      </span>
      <span>
        <Link href='https://github.com/avinashbot/gamesearch' target='_blank' rel='noopener noreferrer'>gamesearch</Link>
        <ProjectLanguage> (haskell)</ProjectLanguage>
      </span>
    </AnchorList>

    <AnchorList title='favourite things'>
      <span>Ruby</span>
      <span>Go</span>
      <span>Python</span>
      <span>HTML/CSS</span>
      <span>Javascript (ES6/JSX)</span>
      <span>Rust</span>
      <span>Kotlin</span>
      <span>Java</span>
      <span>Haskell</span>
    </AnchorList>
  </Container>
)

export default MainContent
