import React from 'react'
import { IndexLink, Link } from 'react-router'

import './Navigation.scss'

export const Navigation = () => (
  <div>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/events' activeClassName='route--active'>
      Events
    </Link>
  </div>
)

export default Navigation
