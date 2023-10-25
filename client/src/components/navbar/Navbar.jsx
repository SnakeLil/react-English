import React, { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
export default function Navbar() {
  const [listOpen, setListOpen] = useState(false)
  const listOpenHandler = () => {
    setListOpen(pre => !pre)
  }
  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/'><span>Lilsnake</span></Link>
      </div>
      <div className="right">
        <Link to='/'><span className='leftItem'>Home</span></Link>
        <Link to='/about'><span className='leftItem'>About</span></Link>
        <Link to='/contact'><span className='leftItem'>Contact</span></Link>
        <Link to='/'><span className='leftItem'>More</span></Link>
        <Link to='/'>
          <span className='mobileList' onClick={listOpenHandler}>
            <ReorderRoundedIcon fontSize='large' />
          </span>
        </Link>

        {listOpen ? <div className="list">
          <Link to='/'><span >Home</span></Link>
          <Link to='/about'><span >About</span></Link>
          <Link to='/contact'><span >Contact</span></Link>
          <Link to='/'><span >More</span></Link>
        </div>
          : null
        }
      </div>
    </div>
  )
}
