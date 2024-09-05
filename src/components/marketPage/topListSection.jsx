import React from 'react'
import { IoMdPeople } from "react-icons/io";
import { MdOutlineGraphicEq } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import colors from "../../variables.scss"

const TopListSection = (props) => {
    const { socialActivity, volume, gainers, losers } = props.topLists;
    const topListData = [
        {
            headerIcon: <IoMdPeople />,
            heading: 'Top 5 Social Activity',
            subHeadings: ['Token', 'Interactions'],
            data: socialActivity,
        },
        {
            headerIcon: <MdOutlineGraphicEq />,
            heading: 'Top 5 Volume',
            subHeadings: ['Exchange', 'Volume'],
            data: volume,
        },
        {
            headerIcon: <AiFillThunderbolt />,
            heading: 'Top 5 Gainers',
            subHeadings: ['Token', 'Total Gain'],
            data: gainers
        },
        {
            headerIcon: <BsFillFileBarGraphFill />,
            heading: 'Top 5 Losers',
            subHeadings: ['Token', 'Total Loss'],
            data: losers
        },
    ]

    const TopCard = ({ headerIcon, heading, subHeadings, data }) => {
        return <div className='card-container'>
            <div className='head-section'>
                {headerIcon}
                <p className='heading'>{heading}</p>
            </div>
            <div className='sub-headings'>
                {subHeadings.map((headingName) => <p key={headingName} className='sub-heading'>{headingName}</p>)}
            </div>
            <div className='data-sec'>
                {data.map(({ icon, name, shortForm, value, time, status }) => {
                    return <div className='data-row' key={name}>
                        <img src={icon} alt="profile pic" className='profile-pic' />
                        <div className='name-sec'>
                            <p className='main-name'>{name}</p>
                            <p className='short-name'>{shortForm}</p>
                        </div>
                        <div className='value-sec'>
                            <p className='main-value'>{value}</p>
                            <div className='sec-value'>
                                <p className='time'>{time}</p>
                                <p className='status' style={{ color: (status > 0) ? colors['primary-success'] : colors['primary-red'] }}>{status}%</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }

    return (
        <div className='top-list-container'>
            {topListData.map(data => <TopCard {...data} key={data.heading}/>)}
        </div>
    )
}

export default TopListSection