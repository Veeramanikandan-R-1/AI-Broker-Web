import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { formatNumber, sentimentStatusFinder } from '../../commonUtils';
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import colors from "../../variables.scss"
import ProgressBar from "@ramonak/react-progress-bar";
import { LineChart } from '@mui/x-charts/LineChart';

const TokenSection = (props) => {
  const SocialSection = ({ heading, discord, twitter, discordStatus, twitterStatus }) => {
    return (
      <div className='social-cont'>
        <p className='heading'>{heading}</p>
        <div className='sec-container'>
          <div className='social-sec'>
            <FaDiscord className='discord-icon' />
            <p className='following'>{discord}K</p>
            <p className='status' style={{ color: (discordStatus > 0) ? colors['primary-success'] : colors['primary-red'] }}>{discordStatus}%</p>
          </div>
          <div className='social-sec'>
            <FaTwitter className='twitter-icon' />
            <p className='following'>{twitter}K</p>
            <p className='status' style={{ color: (twitterStatus > 0) ? colors['primary-success'] : colors['primary-red'] }}>{twitterStatus}%</p>
          </div>
        </div>
      </div>
    )
  }

  const TokenRow = ({ tokenDetail, marketCap, volume, circulatingSupply, socialFollowing, socialInteraction, holders, sentiment }) => {
    const { tokenIcon, tokenName, tokenID, value, rank, watchlists, time, status, lowValue, highValue } = tokenDetail;
    const { marketCapValue, marketCapTime, marketCapStatus, volumePerCap } = marketCap;
    const { volumeValue, volumeTime, volumeStatus, cexValue, dexValue } = volume;
    const { supplyValue, supplyStatus, maxSupply, totalSupply } = circulatingSupply;
    const { totalHolders, holderStatus, trendData } = holders;
    const { dateCalc, timeCalc, sentimentValue } = sentiment;
    const { text, color } = sentimentStatusFinder(sentimentValue);
    return <div className='token-row'>
      <div className='icon-column'>
        <FaRegStar className='favorite' />
        <FaRegFileAlt />
      </div>
      <div className='row-wrap'>
        <div className='token-row1'>
          <div className='token-name-container'>
            <img src={tokenIcon} alt="token-icon" className='token-icon' />
            <p className='token-name'>{tokenName}</p>
            <p className='token-id'>{tokenID}</p>
          </div>
          <p className='token-value'>${formatNumber(value)}</p>
        </div>
        <div className='token-row2'>
          <p>Rank #{rank}</p>
          <p>Coin</p>
          <p>On {formatNumber(watchlists)} watchlists</p>
          <p>{time}</p>
          <p className='stock-status' style={{ color: (status > 0) ? colors['primary-success'] : colors['primary-red'] }}>{status}%</p>
        </div>
        <div className='min-max-values'>
          <p><span className='opacity-value'>Low:</span> <span className='value'>${formatNumber(lowValue)}</span></p>
          <ProgressBar completed={(((value - lowValue) / (highValue - lowValue)) * 100)} className="wrapper"
            barContainerClassName="container"
            labelClassName="label" />
          <p><span className='opacity-value'>High:</span> <span className='value'>${formatNumber(highValue)}</span></p>
        </div>
      </div>
      <div className='market-cap'>
        <p className='sec-heading'>Market Cap</p>
        <p className='value'>${formatNumber(marketCapValue)}B</p>
        <div className='row-wrap'>
          <p className='time'>{marketCapTime}</p>
          <p className='status' style={{ color: marketCapStatus > 0 ? colors['primary-success'] : colors['primary-red'] }}>{marketCapStatus}%</p>
        </div>
        <p className='vol-per-cap'><span className='opacity-text'>24H Volume/Market Cap:</span> ${formatNumber(volumePerCap)}B</p>
      </div>
      <div className='volume-sec'>
        <p className='sec-heading'>Volume</p>
        <p className='value'>${formatNumber(volumeValue)}B</p>
        <div className='row-wrap'>
          <p className='time'>{volumeTime}</p>
          <p className='status' style={{ color: volumeStatus > 0 ? colors['primary-success'] : colors['primary-red'] }}>{volumeStatus}%</p>
        </div>
        <p className='vol-per-cap'><span className='opacity-text'>CEX Vol:</span> ${formatNumber(cexValue)}B</p>
        <p className='vol-per-cap dex-vol'><span className='opacity-text'>DEX Vol:</span> ${formatNumber(dexValue)}B</p>
      </div>
      <div className='supply-sec'>
        <p className='sec-heading'>Circulating Supply</p>
        <div className='row-wrap'>
          <p className='value'>${formatNumber(supplyValue)}{tokenID}</p>
          <p className='supply-status'>{supplyStatus}%</p>
        </div>
        <ProgressBar completed={supplyStatus} className="wrapper"
          barContainerClassName="container"
          labelClassName="label" />
        <p className='vol-per-cap'><span className='opacity-text'>Max Supply:</span> ${formatNumber(maxSupply)}B</p>
        <p className='vol-per-cap dex-vol'><span className='opacity-text'>Total Supply:</span> ${formatNumber(totalSupply)}B</p>
      </div>
      <div className='social-main'>
        <SocialSection {...socialFollowing} heading="Social Following" />
        <SocialSection {...socialInteraction} heading="Social Interactions" />
      </div>
      <div className='holder-sec'>
        <p className='sec-heading'>Holders</p>
        <div className='col-wrap'>
          <p className='value'>${formatNumber(totalHolders)}</p>
          <p className='supply-status' style={{ color: (holderStatus > 0) ? colors['primary-success'] : colors['primary-red'] }}>{holderStatus}%</p>
        </div>
        <div className='chart-container'>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: trendData,
                area: true,
              },
            ]}
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className='sentiment-sec'>
        <p className='sec-heading'>Sentiment</p>
        <div className='col-wrap'>
          <p style={{ color }}>{text}</p>
          <ProgressBar completed={sentimentValue} className="wrapper"
            barContainerClassName="container"
            labelClassName="label" />
        </div>
        <p className='date-time'>Based on data from {dateCalc} at {timeCalc}</p>
      </div>
    </div>
  }

  return (
    <div className='all-token-container'>
      <p className='heading'>All Tokens</p>
      <div className='row-container'>
        {props.tokens?.map(data => <TokenRow {...data} key={data?.tokenDetail?.tokenName}/>)}
      </div>
    </div>
  )
}

export default TokenSection