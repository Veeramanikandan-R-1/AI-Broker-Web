import React from 'react'
import { CustomButton } from '../common/widgets'
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";


const SignUpSection = () => {
  return (
    <div className='signup-section'>
      <div className='text-content'>
        <p className='main-text'>Sign Up to AI Broker Tiers and enjoy all the perks</p>
        <p className='sub-text'>Unlock exclusive access to premium content, personalized insights and unique perks by subscribing to AI Brokers tiers now !</p>
      </div>
      <div className='button-container'>
        <CustomButton label={<div className='button-content'>Sign Up Now <HiMiniArrowTopRightOnSquare /></div>} />
      </div>
    </div>
  )
}

export default SignUpSection