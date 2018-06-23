import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'

const IndexPage = () => (
  <div>
    <Card />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
