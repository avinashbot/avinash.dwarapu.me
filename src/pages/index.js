import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import 'typeface-space-mono'
import 'typeface-open-sans'

import Card from '../components/Card'
import MainContent from '../components/MainContent'
import { large } from '../util/breakpoints'

function isRevealedinCookies () {
  return Cookies.get('pageRevealed') === 'true'
}

const PageWrapper = styled.div`
  min-height: 100%;
  background: #6b004c;
  font-family: "Open Sans", Tahoma, sans-serif;
  color: #eeeeee;

  @media screen and (min-width: ${large.width}px) and (min-height: ${large.height}px) {
    background: linear-gradient(135deg, #771561 20%, #6b004c 20%) fixed;
  }
`

class IndexPage extends Component {
  constructor (props) {
    super(props)
    this.state = { pageRevealed: false }
  }

  toggleReveal () {
    const pageRevealed = !this.state.pageRevealed
    this.setState({ pageRevealed })
    Cookies.set('pageRevealed', pageRevealed ? 'true' : 'false')
  }

  componentDidMount () {
    setTimeout(() => this.setState({ pageRevealed: isRevealedinCookies() }), 0)
  }

  render () {
    return (
      <PageWrapper>
        <Helmet><title>Avinash Dwarapu // Hello!</title></Helmet>
        <Card pageRevealed={this.state.pageRevealed} toggleReveal={() => this.toggleReveal()} />
        <MainContent />
      </PageWrapper>
    )
  }
}

export default IndexPage
