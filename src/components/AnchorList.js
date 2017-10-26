import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { medium, large } from '../util/breakpoints'

const ListBlock = styled.section`
  margin-bottom: 20px;
  padding-top: 5px;
  vertical-align: top;
  text-align: left;
  line-height: 1.8;

  @media screen and (min-width: ${medium.width}px) and (min-height: ${medium.height}px) {
    display: inline-block;
    width: 146.6px; /* [ 500 (width) - 20 (padding-right) - 20*2 (gutters) ] / 3 */
    margin-right: 20px;
    
    &:last-of-type {
      margin-right: 0;
    }
  }

  @media screen and (min-width: ${large.width}px) and (min-height: ${large.height}px) {
    border-top: 2px solid #E1E3DC;
  }
`

const ListTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.3em;
  color: #eeeeee;
  line-height: 1.2;
  font-family: "Space Mono", Tahoma, Helvetica, sans-serif;
`

const ListElement = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const ListItem = styled.li`
  display: inline;
  white-space: nowrap;

  ul &::after {
    font-weight: bolder;
    content: ",";
  }

  ul &:last-of-type::after {
    content: "";
  }
`

const AnchorList = ({ title, children }) => (
  <ListBlock>
    <ListTitle>{title}</ListTitle>
    <ListElement>
      {Children.map(children, (child, i) => [<ListItem key={i}>{child}</ListItem>, ' '])}
    </ListElement>
  </ListBlock>
)

AnchorList.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
}

export default AnchorList
