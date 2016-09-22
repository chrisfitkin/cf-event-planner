import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from '../Navigation'
import { IndexLink } from 'react-router'

import './Header.scss'

export const Header = () => (
  <AppBar fixed flat>
    <IndexLink to='/'>
      CF Event Planner
    </IndexLink>
    <Navigation />
  </AppBar>
)

export default Header
