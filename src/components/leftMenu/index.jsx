import React from 'react'
import './index.scss'
import logo from '../../assets/logo.png'
import { GoVerified } from "react-icons/go";
import { GiNetworkBars } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";
import { LiaRobotSolid } from "react-icons/lia";
import { CiWallet } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import coin from '../../assets/coin.png';
import { formatNumber } from '../../commonUtils';

const LeftMenu = (props) => {
  const location = useLocation()
  const navLinks = [
    { icon: <GiNetworkBars />, linkName: 'Markets', path: 'markets' },
    { icon: <IoEyeOutline />, linkName: 'Watchlist', path: 'watchlist' },
    { icon: <LiaRobotSolid />, linkName: 'AI Trading Bots', path: 'bots' },
    { icon: <CiWallet />, linkName: 'Wallet', path: 'wallets' },
    { icon: <GoTag />, linkName: 'Guides', path: 'guides' },
    { icon: <IoIosPeople />, linkName: 'Community', path: 'community' },
    { icon: <IoIosHeartEmpty />, linkName: 'Support', path: 'Support' },
  ];
  const { name, isVerified, userBalance, userStatus } = props.userData;
  return (
    <div className='left-menu-container'>
      <div className="logo-container">
        <img src={logo} alt="ai broker logo" className='logo' />
      </div>

      <div className='profile-section'>
        <img className='profile-pic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAUXjTDSSg15_lbqcC5ikaJGG4G8igc5YI0OKDyBZbQlpokFz1rkLlA7vpGiCwkBkyydc&usqp=CAU" alt="profile icon" />
        <p className='name'>{name}</p>
        {isVerified && <div className='verified-icon'>
          <p>Verified</p>
          <GoVerified className='icon' />
        </div>}
      </div>

      <div className="balance-sec">
        <p className='balance'>Total Balance</p>
        <div className='amount-sec'>
          <p className='bal-amount'>${formatNumber(userBalance)}</p>
          <p className='status-amount'>{userStatus}%</p>
        </div>
      </div>

      <div className='nav-links'>
        {navLinks.map(({ icon, linkName, path }) => (
          <Link key={path} className='nav-link' to={path} style={{
            backgroundColor: (location.pathname === `/${path}`) ? '#2c7aff' : '#fff',
            color: (location.pathname === `/${path}`) ? '#fff' : '#000',
          }}>
            <div>{icon}</div>
            <p>{linkName}</p>
          </Link>
        ))}
      </div>

      <div className="upgrade-sec">
        <p className='text'>UPGRADE TO <span className='highlight'>Professional Tier</span></p>
        <img src={coin} alt="coin" className='coin-img' />
      </div>
    </div>
  )
}

export default LeftMenu