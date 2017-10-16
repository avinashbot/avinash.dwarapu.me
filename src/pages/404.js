import React from 'react'
import Link from 'gatsby-link'

const NotFound = () => (
  <div>
    <h1>Four Zero Four</h1>
    <p>Looks like you hit a non-existent or removed page. Sorry about that.</p>
    <p><Link to='/'>Go Back?</Link></p>
  </div>
)

export default NotFound
