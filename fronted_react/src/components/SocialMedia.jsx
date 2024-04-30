import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div >
      <a href="https://www.linkedin.com/in/guifu-zhang-859402267"><BsLinkedin /></a>
    </div>
    <div>
    <a href="https://www.facebook.com/ego.147920?mibextid=LQQJ4d"><FaFacebookF /></a>
    </div>
    <div>
    <a href="https://www.instagram.com/alwaysego134?igsh=bGhmazBqd3AwdXFh&utm_source=qr"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
