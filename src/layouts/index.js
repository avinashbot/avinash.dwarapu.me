import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import 'normalize.css'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <html lang='en' />
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title></title>
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
