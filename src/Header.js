import { AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption} from "react-icons/gr";
import { BsPinterest} from "react-icons/bs";
import {BiLogoYoutube} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs';
import {FiHeart} from 'react-icons/fi';
import {BsPerson} from 'react-icons/bs';
import {LiaShoppingBagSolid} from 'react-icons/lia';

import logo from './images/logo.png';

import './index.css';
function Header() {
    return (
        <div className="header">
          
            <p className="insta_icon1"><AiOutlineInstagram className="icon_size"/></p>
            <p className="facebook_icon2"><GrFacebookOption  className="icon_size"/></p>
            <p className="pinterest_icon3"><BsPinterest className="icon_size"/></p>
            <p className="youtube_icon4"><BiLogoYoutube className="icon_size"/></p>
            <img src={logo}className="header_logo" />
            <p className="search_icon"><BsSearch className="icon_size"/></p>
            <input type="text" className="search" placeholder="Search"></input>
            <p className="heart_icon"><FiHeart  className="icon_size"/></p>
            <p className="person_icon"><BsPerson className="icon_size"/></p>
            <p className="bag_icon"><LiaShoppingBagSolid className="icon_size"/></p>
          
        </div>
    );
}

export default Header;