import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
      <ul className='footer__socials'>
        <li><InstagramIcon /></li>
        <li><FacebookIcon /></li>
        <li><TwitterIcon /></li>
        <li><LinkedInIcon /></li>
      </ul>
      <p className='footer__copy'> &copy; 2022 sohaibpizzeria.com</p>

    </div>
  )
}

export default Footer