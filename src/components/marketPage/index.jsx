import React, { useContext } from 'react'
import SignUpSection from './signUpSection'
import TopListSection from './topListSection'
import TokenSection from './tokenSection.'
import "./index.scss";
import { AppContext } from '../../appContext';

const MarketPage = (props) => {
  const { data } = useContext(AppContext);
  return (
    <div className='market-section-container'>
      <p className='heading'>Markets</p>
      <SignUpSection />
      <TopListSection topLists={data?.topLists || []} />
      <TokenSection tokens={data?.allTokens || []} />
    </div>
  )
}

export default MarketPage