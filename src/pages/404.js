import React, { Component } from 'react'
import styled from 'styled-components'
import 'typeface-open-sans'

const Container = styled.div`
  margin: 0 auto;
  padding: 15px;
  max-width: 500px;
  font-family: "Open Sans", Tahoma, Helvetica, sans-serif;
`

class NotFoundPage extends Component {
  componentDidMount () {
    setTimeout(() => { window.location = '/' }, 10000)
  }

  render () {
    return (
      <Container>
        <h1>This page doesn&#8217;t exist.</h1>
        <p>
          <a href='/'>Go back?</a>
          <span> (Going back in 10 seconds...)</span>
        </p>
      </Container>
    )
  }
}

export default NotFoundPage
