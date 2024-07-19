import React from 'react'

import { __ } from '@utility/translation'
import Item from './MenuItem'


const Menu = ({ links, session }) => {
  return links.map((link) => (<Item key={link.name} menu={link} session={session} />))
}

export default Menu
